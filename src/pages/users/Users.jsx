import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table.jsx";
import "./Users.css";
import { fetchUsers, deleteUser } from "../../services/userApi";
import DeleteButton from "../../buttons/DeleteButton.jsx";
import { exportToCSV } from "../../utils/exportToCSV";
import Button from "../../buttons/Button.jsx";

const Users = () => {
  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // stores selected user IDs

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
    { header: "User ID", key: "userId", sortable: true },
    { header: "Full Name", key: "name", sortable: true },
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
              const confirmed = window.confirm(
                `Are you sure you want to delete this user?\n\nName: ${row.name}\nUser ID: ${row.userId}`,
              );

              if (!confirmed) return;

              try {
                await deleteUser(row._id);

                setAllUsers((prev) =>
                  prev.filter((u) => u._id !== row._id),
                );

                setSelectedRows((prev) =>
                  prev.filter((id) => id !== row._id),
                );
              } catch (err) {
                alert("Delete failed: " + err.message);
              }
            }}
          >
            <span className="material-icons">delete</span>
          </button>
        </div>
      ),
    },
  ];

  const handleBulkDelete = async () => {
    const usersToDelete = allUsers.filter((u) =>
      selectedRows.includes(u._id),
    );

    const userListText = usersToDelete
      .map((u) => `${u.name} (${u.userId})`)
      .join("\n");

    const confirmed = window.confirm(
      `Are you sure you want to delete the following users?\n\n${userListText}`,
    );

    if (!confirmed) return;

    try {
      await Promise.all(selectedRows.map((id) => deleteUser(id)));

      setAllUsers((prev) =>
        prev.filter((u) => !selectedRows.includes(u._id)),
      );

      setSelectedRows([]);
    } catch (err) {
      console.error("Bulk delete failed", err);
      alert("Bulk delete failed");
    }
  };

  return (
    <div className="users-page">
      <div className="page-title">
        <h2>Users</h2>
      </div>

      <section className="users-actions">
        <div className="users-actions__bar">
          
          <Button label={ <> <span className="material-icons">filter_list</span> Filter </>} className="users-actions__btn users-actions__btn--filter"
            onClick={() => setShowFilters(!showFilters)}/>

          <Button
            label="+ Add New User"
            className="users-actions__btn users-actions__btn--add"
            onClick={() => navigate("/add-user")}
          />

          <Button  label= {<><span className="material-icons">file_download</span> Export</>} className="users-actions__btn users-actions__btn--export"
            onClick={() => exportToCSV(allUsers, "users.csv")} />

          {selectedRows.length > 0 && (
            <Button
              label="Delete"
              className="delete-btn"
              onClick={handleBulkDelete}
            />
          )}
        </div>

        {showFilters && (
          <div className="users-filters">
            <div className="users-filters__row">
              <label>Role:</label>
              <select>
                <option>All</option>
                <option>Admin</option>
                <option>User</option>
              </select>

              <label>Status:</label>
              <select>
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>
        )}
      </section>

      <div className="users-table">
        <Table
          columns={columns}
          data={allUsers}
          showSearch
          showPagination
          onSelectionChange={setSelectedRows}
          defaultSortKey="userId"
          defaultSortDirection="asc"
        />
      </div>
    </div>
  );
};

export default Users;
