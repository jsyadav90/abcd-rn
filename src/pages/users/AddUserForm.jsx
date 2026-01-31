import { useState } from "react";
import Form from "../../components/Form/Form.jsx";
import InputField from "../../components/Form/InputField";
import SelectField from "../../components/Form/SelectField";

const AddUserForm = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    designation: "",
    phone_no: "",
    email: "",
    role: "user",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await onSave(formData);
    setFormData({
      userId: "",
      name: "",
      designation: "",
      phone_no: "",
      email: "",
      role: "user",
    });
  } catch (err) {
    console.error(err);
  }
};

  return (
    <Form
      title="Add User"
      onSubmit={handleSubmit}
      actions={
        <>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="primary">
            Save
          </button>
        </>
      }
    >
      <InputField label="Emp ID" name="userId" value={formData.userId} onChange={handleChange} required />
      <InputField label="Name" name="name" value={formData.name} onChange={handleChange} required />
      <InputField label="Designation" name="designation" value={formData.designation} onChange={handleChange} />
      <InputField label="Phone No" name="phone_no" value={formData.phone_no} onChange={handleChange} />
      <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />

      <SelectField
        label="Role"
        name="role"
        value={formData.role}
        onChange={handleChange}
        options={[
          { label: "User", value: "user" },
          { label: "Admin", value: "admin" },
          { label: "Super Admin", value: "super_admin" },
        ]}
      />
    </Form>
  );
};

export default AddUserForm;
