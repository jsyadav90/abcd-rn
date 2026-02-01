const ColumnFilter = ({ value, onChange, onClose }) => {
  return (
    <div className="column-filter">
      <input
        type="text"
        placeholder="Filter..."
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
      <button onClick={onClose}>✕</button>
    </div>
  );
};

export default ColumnFilter;
