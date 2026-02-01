const ColumnSort = ({ direction }) => {
  return (
    <span className="column-sort">
      <span className={direction === "asc" ? "active" : ""}>▲</span>
      <span className={direction === "desc" ? "active" : ""}>▼</span>
    </span>
  );
};

export default ColumnSort;
