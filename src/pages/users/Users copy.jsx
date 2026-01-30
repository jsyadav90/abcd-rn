import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table.jsx";
import "./Users.css";
import AddNewButton from "../../buttons/AddNewButton.jsx";

import { fetchUsers } from "../../services/userApi";

const Users = () => {

  const navigate = useNavigate();
  
  const [showFilters, setShowFilters] = useState(false);
 


  const users = [
    {
      id: "U001",
      name: "John Doe",
      designation: "Principal",
      department: "Admin",
      email: "john.doe@example.com",
      phone: "9876543210",
      role: "Admin",
      status: "Active",
      remarks: "Excellent leadership",
    },
    {
      id: "U002",
      name: "Jane Smith",
      designation: "Teacher",
      department: "Teaching",
      email: "jane.smith@example.com",
      phone: "9876543211",
      role: "Teacher",
      status: "Inactive",
      remarks: "On maternity leave",
    },
  ];

  const columns = [
    { header: "User ID", key: "id" },
    { header: "Full Name", key: "name" },
    { header: "Designation", key: "designation" },
    { header: "Department", key: "department" },
    { header: "Email", key: "email" },
    { header: "Phone no", key: "phone" },
    { header: "Role", key: "role" },
    {
      header: "Status",
      render: (row) => (
        <span className={`status ${row.status.toLowerCase()}`}>
          {row.status}
        </span>
      ),
    },
    { header: "Remarks", key: "remarks" },
    {
      header: "Actions",
      render: () => (
        <div className="action-buttons">
          <button className="edit-btn">
            <span className="material-icons">edit</span>
          </button>
          <button className="delete-btn">
            <span className="material-icons">delete</span>
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="table-section">
      {/* ACTION BAR */}
      <div className="table-actions">
        <button
          className="btn filter-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span className="material-icons">filter_list</span> Filter
        </button>

        {/*
        <button
          className="btn add-btn"
          onClick={() => navigate("/add-user")}
        >
          <span className="material-icons">person_add</span> Add User
        </button>  */}

        <AddNewButton
          label="User"
          className="btn add-btn"
          onClick={() => navigate("/add-user")}
        />

        <button className="btn export-btn">
          <span className="material-icons">file_download</span> Export
        </button>
      </div>

      {/* FILTERS */}
      {showFilters && (
        <div className="column-filters">
          <div className="filter-row">
            <label>Role:</label>
            <select className="filter-select">
              <option>All</option>
              <option>Admin</option>
              <option>Teacher</option>
            </select>

            <label>Status:</label>
            <select className="filter-select">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="table-container">
        <Table columns={columns} data={users} />
      </div>
    </section>
  );
};

export default Users;
