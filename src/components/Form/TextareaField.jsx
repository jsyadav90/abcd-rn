import "./Form.css";

const TextareaField = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  rows = 3,
  required = false,
}) => {
  return (
    <div className="form-group">
      <label>
        {label} {required && <span>*</span>}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
    </div>
  );
};

export default TextareaField;
