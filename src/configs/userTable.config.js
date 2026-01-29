export const userTableConfig = {
  endpoint: "/api/users",

  bulkActions: {
    disable: "/api/users/bulk-disable",
    delete: "/api/users/bulk-delete",
  },

  columns: [
    { header: "User ID", key: "userId" },
    { header: "Full Name", key: "name" },
    { header: "Email", key: "email" },
    { header: "Role", key: "role" },
    {
      header: "Status",
      render: (row) => (
        <span className={`status ${row.status.toLowerCase()}`}>
          {row.status}
        </span>
      ),
    },
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
  ],
};
