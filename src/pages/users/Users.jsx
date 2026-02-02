import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table.jsx";
import "./Users.css";
import {
  fetchUsers,
  deleteUser,
  toggleUserLogin,
} from "../../services/userApi";
import { exportToCSV } from "../../utils/exportToCSV";
import Button from "../../buttons/Button.jsx";

/* ---------- Row Action Menu ---------- */
const RowActions = ({
  row,
  navigate,
  deleteUser,
  onToggleLogin,
  setAllUsers,
  setSelectedRows,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDelete = async () => {
    setOpen(false);

    const confirmed = window.confirm(
      `Are you sure you want to delete this user?\n\nName: ${row.name}\nUser ID: ${row.userId}`,
    );

    if (!confirmed) return;

    try {
      await deleteUser(row._id);
      setAllUsers((prev) => prev.filter((u) => u._id !== row._id));
      setSelectedRows((prev) => prev.filter((id) => id !== row._id));
    } catch (err) {
      alert("Delete failed");
    }
  };

  const handleToggle = () => {
    setOpen(false);
    onToggleLogin(row);
  };

  return (
    <div className="row-actions" ref={menuRef}>
      <button className="more-btn" onClick={() => setOpen((p) => !p)}>
        <span className="material-icons">more_vert</span>
      </button>

      {open && (
        <div className="actions-menu">
          <button
            className="menu-item"
            onClick={() => {
              setOpen(false);
              navigate(`/edit-user/${row._id}`);
            }}
          >
            <span className="material-icons">edit</span>
            Edit
          </button>

          <button className="menu-item delete" onClick={handleDelete}>
            <span className="material-icons">delete</span>
            Delete
          </button>

          <button className="menu-item" onClick={handleToggle}>
            <span className="material-icons">
              {row.canLogin ? "lock" : "lock_open"}
            </span>
            {row.canLogin ? "Disable Login" : "Enable Login"}
          </button>
        </div>
      )}
    </div>
  );
};

/* ---------- Users Page ---------- */
const Users = () => {
  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setAllUsers(data);
    } catch (err) {
      console.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  /* ---------- Enable / Disable Login ---------- */
  const handleToggleLogin = async (user) => {
    const msg = user.canLogin
      ? "User login will be disabled"
      : "User login will be enabled";

    const confirmed = window.confirm(msg);
    if (!confirmed) return;

    try {
      const res = await toggleUserLogin(user._id);

      alert(res.message);

      setAllUsers((prev) =>
        prev.map((u) =>
          u._id === user._id ? { ...u, canLogin: res.canLogin } : u,
        ),
      );
    } catch (err) {
      alert(err.message);
    }
  };

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
        <RowActions
          row={row}
          navigate={navigate}
          deleteUser={deleteUser}
          onToggleLogin={handleToggleLogin}
          setAllUsers={setAllUsers}
          setSelectedRows={setSelectedRows}
        />
      ),
    },
  ];

  const handleBulkDelete = async () => {
    const usersToDelete = allUsers.filter((u) => selectedRows.includes(u._id));

    const confirmed = window.confirm(`Delete ${usersToDelete.length} users?`);

    if (!confirmed) return;

    try {
      await Promise.all(selectedRows.map((id) => deleteUser(id)));
      setAllUsers((prev) => prev.filter((u) => !selectedRows.includes(u._id)));
      setSelectedRows([]);
    } catch {
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
          <Button
            label={
              <>
                <span className="material-icons">filter_list</span> Filter
              </>
            }
            className="users-actions__btn users-actions__btn--filter"
            onClick={() => setShowFilters(!showFilters)}
          />

          <Button
            label="+ Add New User"
            className="users-actions__btn users-actions__btn--add"
            onClick={() => navigate("/add-user")}
          />

          <Button
            label={
              <>
                <span className="material-icons">file_download</span> Export
              </>
            }
            className="users-actions__btn users-actions__btn--export"
            onClick={() => exportToCSV(allUsers, "users.csv")}
          />

          {selectedRows.length > 0 && (
            <Button
              label="Delete"
              className="delete-btn"
              onClick={handleBulkDelete}
            />
          )}
        </div>
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
