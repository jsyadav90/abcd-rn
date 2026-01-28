import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Users.css"

const Users = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      {/* ===== REUSABLE TABLE SECTION ===== */}
      <section className="table-section">
        
        {/* ===== Top Action Bar ===== */}
        <div className="table-actions">
          <button
            className="btn filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            <span className="material-icons">filter_list</span> Filter
          </button>

          <button
            className="btn add-btn"
            onClick={() => navigate("/add-user")}
          >
            <span className="material-icons">person_add</span> Add User
          </button>

          <button className="btn export-btn">
            <span className="material-icons">file_download</span> Export
          </button>
        </div>

        {/* ===== COLUMN FILTER BAR ===== */}
        {showFilters && (
          <div className="column-filters">
            <div className="filter-row">
              <label htmlFor="filterRole">Role:</label>
              <select id="filterRole" className="filter-select">
                <option value="">All</option>
                <option value="Admin">Admin</option>
                <option value="Staff">Staff</option>
                <option value="Teacher">Teacher</option>
                <option value="Support">Support</option>
              </select>

              <label htmlFor="filterStatus">Status:</label>
              <select id="filterStatus" className="filter-select" defaultValue="Active">
                <option value="">All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <button className="btn reset-filter">
                <span className="material-icons">refresh</span> Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* ===== TABLE ===== */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>User ID</th>
                <th>Full Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone no</th>
                <th>Role</th>
                <th>Status</th>
                <th>Remarks</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U001</td>
                <td>John Doe</td>
                <td>Principal</td>
                <td>Admin</td>
                <td>john.doe@example.com</td>
                <td>9876543210</td>
                <td>Admin</td>
                <td><span className="status active">Active</span></td>
                <td>Excellent leadership</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>

              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox" className="row-checkbox" /></td>
                <td>U002</td>
                <td>Jane Smith</td>
                <td>Teacher</td>
                <td>Teaching</td>
                <td>jane.smith@example.com</td>
                <td>9876543211</td>
                <td>Teacher</td>
                <td><span className="status inactive">Inactive</span></td>
                <td>On maternity leave</td>
                <td className="action-buttons">
                  <button className="edit-btn" title="Edit">
                    <span className="material-icons">edit</span>
                  </button>
                  <button className="delete-btn" title="Delete">
                    <span className="material-icons">delete</span>
                  </button>
                </td>
              </tr>

              {/* remaining rows can stay exactly same */}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Users;
