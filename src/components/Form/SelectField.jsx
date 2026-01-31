const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="form-group">
      <label>{label}</label>

      <select name={name} value={value} onChange={onChange}>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default SelectField;
