import { useMemo, useState } from "react";
import "./Table.css";

const Table = ({
  columns,
  data,
  pageSize = 20,
  showSearch = true,
  showPagination = true,
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredData = useMemo(() => {
    if (!showSearch || !search) return data;

    return data.filter(row =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, data, showSearch]);

  const totalPages = showPagination
    ? Math.ceil(filteredData.length / pageSize)
    : 1;

  const tableData = showPagination
    ? filteredData.slice((page - 1) * pageSize, page * pageSize)
    : filteredData;

  const toggleRow = (row) => {
    setSelectedRows(prev =>
      prev.includes(row)
        ? prev.filter(r => r !== row)
        : [...prev, row]
    );
  };

  const toggleAll = (checked) => {
    setSelectedRows(checked ? tableData : []);
  };

  return (
    <>
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

      <table className="data-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={(e) => toggleAll(e.target.checked)}
                checked={
                  tableData.length > 0 &&
                  tableData.every(row => selectedRows.includes(row))
                }
              />
            </th>

            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row)}
                  onChange={() => toggleRow(row)}
                />
              </td>

              {columns.map((col, i) => (
                <td key={i}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
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

      {showPagination && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {totalPages || 1}
          </span>
          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage(p => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Table;
