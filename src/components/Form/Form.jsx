import "./Form.css";

const Form = ({ title, children, onSubmit, actions }) => {
  return (
    <div className="form-wrapper">
      {title && <h2 className="form-title">{title}</h2>}

      <form onSubmit={onSubmit} className="form" >
        <div className="form-body">{children}</div>

        <div className="form-actions">
          {actions}
        </div>
      </form>
    </div>
  );
};

export default Form;
