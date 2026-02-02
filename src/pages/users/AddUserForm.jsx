import { useState, useEffect } from "react";
import Form from "../../components/Form/Form.jsx";
import InputField from "../../components/Form/InputField.jsx";
import SelectField from "../../components/Form/SelectField.jsx";
import TextareaField from "../../components/Form/TextareaField.jsx";

const AddUserForm = ({ onSave, onClose, formData: initialData }) => {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    designation: "",
    phone_no: "",
    email: "",
    role: "user",
    remarks: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  // auto handle canLogin based on role
  // useEffect(() => {
  //   if (formData.role === "admin" || formData.role === "super_admin") {
  //     setFormData((prev) => ({ ...prev, canLogin: true }));
  //   } else {
  //     setFormData((prev) => ({
  //       ...prev,
  //       canLogin: false,
  //       username: "",
  //       password: "",
  //     }));
  //   }
  // }, [formData.role]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <Form
          className="form-title"
          title={initialData ? "Edit User" : "Add User"}
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
          <div className="form-fields">
            <InputField
              label="Emp ID"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />

            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
            <InputField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />

            <InputField
              label="Phone No"
              name="phone_no"
              value={formData.phone_no}
              onChange={handleChange}
            />

            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

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

            <SelectField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                { label: "Select" },
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
              ]}
            />

            {/* <SelectField
              label="Can Login"
              name="canLogin"
              value={formData.canLogin ? "yes" : "no"}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  canLogin: e.target.value === "yes",
                }))
              }
              options={[
                { label: "No", value: "no" },
                { label: "Yes", value: "yes" },
              ]}
              disabled={
                formData.role === "admin" || formData.role === "super_admin"
              }
            /> */}

            {/* {(formData.canLogin && formData.status=="active") && (
              <>
                <InputField
                  label="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </>
            )} */}
          </div>

          <TextareaField
            label="Remarks"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            rows={4}
            placeholder="Optional notes..."
          />
        </Form>
      </div>
    </div>
  );
};

export default AddUserForm;
