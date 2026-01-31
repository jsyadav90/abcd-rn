import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table.jsx";
import "./Users.css";
import AddNewButton from "../../buttons/AddNewButton.jsx";
import { fetchUsers, deleteUser } from "../../services/userApi";
import DeleteButton from "../../buttons/DeleteButton.jsx";
import { exportToCSV } from "../../utils/exportToCSV";


const Users = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // parent state for bulk delete

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setAllUsers(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };

    loadUsers();
  }, []);

  const columns = [
    { header: "User ID", key: "userId" },
    { header: "Full Name", key: "name" },
    { header: "Designation", key: "designation" },
    { header: "Department", key: "department" },
    { header: "Email", key: "email" },
    { header: "Phone no", key: "phone_no" },
    { header: "Role", key: "role" },
    { header: "Status", key: "status" },
    { header: "Remarks", key: "remarks" },
    {
      header: "Actions",
      render: (row) => (
        <div className="action-buttons">
          <button
            className="edit-btn"
            onClick={() => navigate(`/edit-user/${row._id}`)}
          >
            <span className="material-icons">edit</span>
          </button>

          <button
            className="delete-btn"
            onClick={async () => {
              if (
                window.confirm("Are you sure you want to delete this user?")
              ) {
                try {
                  await deleteUser(row._id);
                  setAllUsers((prev) => prev.filter((u) => u._id !== row._id));
                  // remove from selectedRows if it was selected
                  setSelectedRows((prev) =>
                    prev.filter((id) => id !== row._id)
                  );
                } catch (err) {
                  console.error("Failed to delete user", err);
                  alert("Delete failed: " + err.message);
                }
              }
            }}
          >
            <span className="material-icons ">delete</span>
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

        <AddNewButton
          label="User"
          className="btn add-btn"
          onClick={() => navigate("/add-user")}
        />

        <button className="btn export-btn" 
        onClick={() => exportToCSV(allUsers, "users.csv")}
        // onClick={() => exportToCSV(selectedRows, "selected-users.csv")} disabled={!selectedRows.length}
        
        >
          <span className="material-icons">file_download</span> Export
        </button>

        {/* Bulk Delete Button */}
        {selectedRows.length > 0 && (

          <DeleteButton
            className="btn delete-btn"
            onClick={async () => {
              if (
                window.confirm(
                  `Are you sure you want to delete ${selectedRows.length} users?`
                )
              ) {
                try {
                  // delete all selected users
                  await Promise.all(selectedRows.map((id) => deleteUser(id)));
                  // remove deleted users from table state
                  setAllUsers((prev) =>
                    prev.filter((u) => !selectedRows.includes(u._id))
                  );
                  // clear selected rows
                  setSelectedRows([]);
                } catch (err) {
                  console.error("Bulk delete failed", err);
                  alert("Bulk delete failed");
                }
              }
            }}
          />
          
        )}
      </div>

      {/* FILTERS */}
      {showFilters && (
        <div className="column-filters">
          <div className="filter-row">
            <label>Role:</label>
            <select className="filter-select">
              <option>All</option>
              <option>Admin</option>
              <option>User</option>
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
        <Table
          columns={columns}
          data={allUsers}
          showSearch={true}
          showPagination={true}
          onSelectionChange={setSelectedRows} // important!
        />
      </div>
    </section>
  );
};

export default Users;
