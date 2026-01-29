import { useMemo, useState } from "react";
import "./Table.css"

const Table = ({
  columns,
  data,
  pageSize = 20,
  showSearch = true,
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);

  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter(row =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, data]);

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const toggleRow = (row) => {
    setSelectedRows(prev =>
      prev.includes(row)
        ? prev.filter(r => r !== row)
        : [...prev, row]
    );
  };

  const toggleAll = (checked) => {
    setSelectedRows(checked ? paginatedData : []);
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
                  paginatedData.length > 0 &&
                  paginatedData.every(row => selectedRows.includes(row))
                }
              />
            </th>

            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  className="row-checkbox"
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

          {paginatedData.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} align="center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>

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
    </>
  );
};

export default Table;
