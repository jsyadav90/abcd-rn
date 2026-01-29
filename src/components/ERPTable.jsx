import { useEffect, useState } from "react";
import Table from "./Table/Table.jsx";

const ERPTable = ({ config }) => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
  });

  const fetchData = async (page = 1) => {
    const res = await fetch(`${config.endpoint}?page=${page}&limit=10`);
    const json = await res.json();

    setData(json.data);
    setPagination({
      page: json.page,
      totalPages: json.totalPages,
    });
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const bulkDisable = async () => {
    await fetch(config.bulkActions.disable, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selected.map((s) => s._id) }),
    });

    fetchData(pagination.page);
  };

  const bulkDelete = async () => {
    await fetch(config.bulkActions.delete, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: selected.map((s) => s._id) }),
    });

    fetchData(1);
  };

  return (
    <>
      {selected.length > 0 && (
        <div className="bulk-actions">
          <button className="btn warn" onClick={bulkDisable}>
            Disable Selected
          </button>
          <button className="btn danger" onClick={bulkDelete}>
            Delete Selected
          </button>
        </div>
      )}

      <Table
        columns={config.columns}
        data={data}
        pagination={pagination}
        onPageChange={fetchData}
        onSelectionChange={setSelected}
      />
    </>
  );
};

export default ERPTable;
