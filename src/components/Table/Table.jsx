import { useMemo, useState, useEffect } from "react";
import "./Table.css";

const Table = ({
  columns,
  data,
  pageSize = 20,
  showSearch = true,
  showPagination = true,
  onSelectionChange,
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]); // ONLY _id here

  // inform parent about selection
  useEffect(() => {
    if (typeof onSelectionChange === "function") {
      onSelectionChange(selectedRows);
    }
  }, [selectedRows, onSelectionChange]);

  

  const filteredData = useMemo(() => {
    if (!showSearch || !search) return data;
    return data.filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, data, showSearch]);

  const totalPages = showPagination
    ? Math.ceil(filteredData.length / pageSize)
    : 1;

  const tableData = showPagination
    ? filteredData.slice((page - 1) * pageSize, page * pageSize)
    : filteredData;

  // toggle single row
  const toggleRow = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row._id)
        ? prev.filter((id) => id !== row._id)
        : [...prev, row._id],
    );
  };

  // toggle all rows on current page
  const toggleAll = (checked) => {
    if (checked) {
      const pageIds = tableData.map((row) => row._id);
      setSelectedRows((prev) => [...new Set([...prev, ...pageIds])]);
    } else {
      const pageIds = tableData.map((row) => row._id);
      setSelectedRows((prev) => prev.filter((id) => !pageIds.includes(id)));
    }
  };

  return (
    <>
      <div className="table-option">
        {showSearch && (
          <input
            className="table-search"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        )}

        {showPagination && (
          <div className="pagination">
            <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
              Prev
            </button>
            <span>
              Page {page} of {totalPages || 1}
            </span>
            <button
              disabled={page === totalPages || totalPages === 0}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => toggleAll(e.target.checked)}
                checked={
                  tableData.length > 0 &&
                  tableData.every((row) => selectedRows.includes(row._id))
                }
              />
            </th>

            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((row) => (
            <tr key={row._id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row._id)}
                  onChange={() => toggleRow(row)}
                />
              </td>

              {columns.map((col, i) => (
                <td key={i}>{col.render ? col.render(row) : row[col.key]}</td>
              ))}
            </tr>
          ))}

          {tableData.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} align="center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
