import { useMemo, useState, useEffect } from "react";
import "./Table.css";
import TableSearch from "./TableSearch";
import TablePagination from "./TablePagination";

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
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    onSelectionChange?.(selectedRows);
  }, [selectedRows, onSelectionChange]);

  const filteredData = useMemo(() => {
    if (!showSearch || !search) return data;
    return data.filter((row) =>
      Object.values(row).join(" ").toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, data, showSearch]);

  const highlightText = (text, search) => {
    if (!search) return text;

    const regex = new RegExp(`(${search})`, "gi");
    return String(text)
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === search.toLowerCase() ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          part
        ),
      );
  };

  const totalPages = showPagination
    ? Math.ceil(filteredData.length / pageSize)
    : 1;

  const tableData = showPagination
    ? filteredData.slice((page - 1) * pageSize, page * pageSize)
    : filteredData;

  const toggleRow = (row) => {
    setSelectedRows((prev) =>
      prev.includes(row._id)
        ? prev.filter((id) => id !== row._id)
        : [...prev, row._id],
    );
  };

  const toggleAll = (checked) => {
    const pageIds = tableData.map((row) => row._id);
    setSelectedRows((prev) =>
      checked
        ? [...new Set([...prev, ...pageIds])]
        : prev.filter((id) => !pageIds.includes(id)),
    );
  };

  return (
    <div className="table">
      <div className="table__options">
        {showSearch && (
          <TableSearch
            value={search}
            onChange={(val) => {
              setSearch(val);
              setPage(1);
            }}
          />
        )}

        {showPagination && (
          <TablePagination
            className="table-pagination"
            page={page}
            totalPages={totalPages}
            onPrev={() => setPage(page - 1)}
            onNext={() => setPage(page + 1)}
          />
        )}
      </div>

      <div className="table__container">
        <table className="table__data">
          <thead>
            <tr>
              <th className="table__checkbox">
                <input type="checkbox" />
              </th>
              {columns.map((col, i) => (
                <th key={i}>{col.header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.map((row) => (
              <tr
                key={row._id}
                className={
                  selectedRows.includes(row._id)
                    ? "table__row table__row--selected"
                    : "table__row"
                }
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row._id)}
                    onChange={() => toggleRow(row)}
                  />
                </td>

                {columns.map((col, i) => (
                  <td key={i}>
                    {col.render
                      ? col.render(row)
                      : highlightText(row[col.key], search)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    // <div className="table-section">
    //   <div className="table-option">
    //     {showSearch && (
    //       <TableSearch
    //         value={search}
    //         onChange={(val) => {
    //           setSearch(val);
    //           setPage(1);
    //         }}
    //       />
    //     )}

    //     {showPagination && (
    //       <TablePagination
    //         page={page}
    //         totalPages={totalPages}
    //         onPrev={() => setPage(page - 1)}
    //         onNext={() => setPage(page + 1)}
    //       />
    //     )}
    //   </div>

    //     <table className="data-table">
    //       <thead>
    //         <tr>
    //           <th>
    //             <input
    //               type="checkbox"
    //               onChange={(e) => toggleAll(e.target.checked)}
    //               checked={
    //                 tableData.length > 0 &&
    //                 tableData.every((row) =>
    //                   selectedRows.includes(row._id)
    //                 )
    //               }
    //             />
    //           </th>
    //           {columns.map((col, i) => (
    //             <th key={i}>{col.header}</th>
    //           ))}
    //         </tr>
    //       </thead>

    //       <tbody>
    //         {tableData.map((row) => (
    //           <tr
    //             key={row._id}
    //             className={
    //               selectedRows.includes(row._id) ? "selected" : ""
    //             }
    //           >
    //             <td>
    //               <input
    //                 type="checkbox"
    //                 checked={selectedRows.includes(row._id)}
    //                 onChange={() => toggleRow(row)}
    //               />
    //             </td>
    //             {columns.map((col, i) => (
    //               <td key={i}>
    //                 {col.render ? col.render(row) : row[col.key]}
    //               </td>
    //             ))}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>

    // </div>
  );
};

export default Table;
