import React from "react";
import Table from "../../components/Table/Table.jsx";
import "./Deshboard.css"
import { Link } from "react-router-dom";
const Dashboard = () => {



  
  const alerts = [
    {
      itemName: "HP LaserJet Pro 4200",
      category: "Printer",
      issue: "Low Ink Level",
      issueType: "warning",
      reportedOn: "16-Oct-2025",
      status: "Pending",
      statusType: "pending",
    },
    {
      itemName: "Dell OptiPlex 3080",
      category: "Desktop",
      issue: "Warranty Expiring Soon",
      issueType: "danger",
      reportedOn: "15-Oct-2025",
      status: "In Process",
      statusType: "active",
    },
    {
      itemName: "Cisco Switch 2960",
      category: "Networking",
      issue: "Device Down",
      issueType: "critical",
      reportedOn: "18-Oct-2025",
      status: "Critical",
      statusType: "critical",
    },
    {
      itemName: "HP EliteBook 850",
      category: "Laptop",
      issue: "Battery Health Moderate",
      issueType: "info",
      reportedOn: "17-Oct-2025",
      status: "Resolved",
      statusType: "resolved",
    },
    {
      itemName: "Projector EPSON X500",
      category: "Peripheral",
      issue: "Lamp Replacement Due",
      issueType: "danger",
      reportedOn: "14-Oct-2025",
      status: "Pending",
      statusType: "pending",
    },
  ];

  const columns = [
    { header: "Item Name", key: "itemName" },
    { header: "Category", key: "category" },
    {
      header: "Issue",
      render: (row) => (
        <span className={`tag ${row.issueType}`}>
          {row.issue}
        </span>
      ),
    },
    { header: "Reported On", key: "reportedOn" },
    {
      header: "Status",
      render: (row) => (
        <span className={`status ${row.statusType}`}>
          {row.status}
        </span>
      ),
    },
  ];

  
  return (
  <>
    
      <div className="inventory-dashboard">
        {/* <!-- ===== Top Summary Cards ===== --> */}
        <section className="summary-section">
          <div className="summary-card blue">
            <div className="icon"><i className="fas fa-laptop"></i></div>
            <div className="details">
              <h2>240</h2>
              <p>Total IT Assets</p>
            </div>
          </div>
          <div className="summary-card green">
            <div className="icon"><i className="fas fa-network-wired"></i></div>
            <div className="details">
              <h2>68</h2>
              <p>Networking Devices</p>
            </div>
          </div>
          <div className="summary-card yellow">
            <div className="icon"><i className="fas fa-desktop"></i></div>
            <div className="details">
              <h2>110</h2>
              <p>Computers</p>
            </div>
          </div>
          <div className="summary-card red">
            <div className="icon"><i className="fas fa-exclamation-triangle"></i></div>
            <div className="details">
              <h2>6</h2>
              <p>Faulty Items</p>
            </div>
          </div>
        </section>

        {/* <!--! ===== School Switch Section ===== --> */}
        <section className="school-panel">
          {/* <!-- LEFT SECTION --> */}
          <div className="panel-left">
            {/* <!-- User Profile --> */}
            <div className="profile-card">
              {/* <!-- <h3>Logged in User</h3> --> */}
              <div className="profile-details">
                <img
                  src="/assets/images/user-avatar.png"
                  alt="User"
                  className="profile-avatar"
                />
                <div className="profile-meta">
                  <h4 id="userName">John Doe</h4>
                  <p className="profile-role">System Administrator</p>
                  <p className="profile-email">john.doe@bluebells.edu.in</p>
                </div>
              </div>
            </div>

            {/* <!-- School Selection --> */}
            <div className="school-settings">
              <div className="branch-selector">
                <h3>School Branch</h3>
                <select id="schoolSelect">
                  <option value="gurugram">
                    Gurugram [The Blue Bells School]
                  </option>
                  <option value="noida">Noida [Sunrise International]</option>
                  <option value="delhi">Delhi [Greenfield Public]</option>
                </select>
              </div>

              <div className="academic-controls">
                <div className="year-selector">
                  <h3>Academic Year</h3>
                  <select id="academicYear">
                    <option>2025-2026</option>
                    <option>2024-2025</option>
                  </select>
                </div>

                <button id="applySchool" className="btn-apply">Apply</button>
              </div>
            </div>
          </div>

          {/* <!-- RIGHT SECTION --> */}
          <div className="panel-right">
            <section className="sync-panel">
              <div className="sync-status">
                <p>Next Auto Sync in: <span id="syncCountdown">59s</span></p>
                <p>Last Synced: <strong>18-Oct-2025 12:45 PM</strong></p>
              </div>
              <div className="sync-actions">
                <button id="syncNow" className="btn-sync">
                  <i className="fas fa-sync-alt"></i> Sync Now
                </button>
              </div>
            </section>
          </div>
        </section>

        {/* <!-- ===== Quick Actions ===== --> */}
        <section className="actions-section">
          <button className="action-btn primary">
            <i className="fas fa-plus-circle"></i> Add Item
          </button>
          <button className="action-btn">
            <i className="fas fa-chart-pie"></i> View Reports
          </button>
          <button className="action-btn">
            <i className="fas fa-file-export"></i> Export CSV
          </button>
        </section>

        {/* <!-- ===== Overview + Chart Row ===== --> */}
        <section className="overview-grid">
          <div className="overview-card">
            <h3>Recently Added Items</h3>
            <ul>
              <li>
                <span>HP Laptop</span>
                 <span className="status available">Available</span>
              </li>
              <li>
                <span>Dell Monitor</span>
                <span className="status assigned">Assigned</span>
              </li>
              <li>
                <span>Cisco Switch</span>
                <span className="status faulty">Faulty</span>
              </li>
            </ul>
            <Link to="#">View All</Link>
          </div>

          <div className="overview-card">
            <h3>Vendor Summary</h3>
            <ul>
              <li><span>HP India</span><span>42 Items</span></li>
              <li><span>Lenovo</span><span>31 Items</span></li>
              <li><span>Cisco</span><span>15 Devices</span></li>
            </ul>
            <Link to="#">Manage Vendors</Link>
          </div>

          <div className="overview-card">
            <h3>Maintenance Schedule</h3>
            <ul>
              <li><span>Printer Room</span><span>20 Oct</span></li>
              <li><span>Server Rack</span><span>25 Oct</span></li>
              <li><span>Lab 2 PCs</span><span>28 Oct</span></li>
            </ul>
            <Link to="#">View Calendar</Link>
          </div>

          {/* <!-- Chart --> */}
          <div className="overview-card chart-card">
            <h3>Asset Status Overview</h3>
            <canvas id="assetChart"></canvas>
          </div>
        </section>
      </div>

      {/* <!-- ===== Alerts & Warnings Section ===== --> */}
      <section className="alerts-section">
        <h3><i className="fas fa-bell"></i> Alerts & Warnings</h3>

        {/* <div className="alerts-table-container">
          <table className="alerts-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Issue</th>
                <th>Reported On</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HP LaserJet Pro 4200</td>
                <td>Printer</td>
                <td><span className="tag warning">Low Ink Level</span></td>
                <td>16-Oct-2025</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
              <tr>
                <td>Dell OptiPlex 3080</td>
                <td>Desktop</td>
                <td><span className="tag danger">Warranty Expiring Soon</span></td>
                <td>15-Oct-2025</td>
                <td><span className="status active">In Process</span></td>
              </tr>
              <tr>
                <td>Cisco Switch 2960</td>
                <td>Networking</td>
                <td><span className="tag critical">Device Down</span></td>
                <td>18-Oct-2025</td>
                <td><span className="status critical">Critical</span></td>
              </tr>
              <tr>
                <td>HP EliteBook 850</td>
                <td>Laptop</td>
                <td><span className="tag info">Battery Health Moderate</span></td>
                <td>17-Oct-2025</td>
                <td><span className="status resolved">Resolved</span></td>
              </tr>
              <tr>
                <td>Projector EPSON X500</td>
                <td>Peripheral</td>
                <td><span className="tag danger">Lamp Replacement Due</span></td>
                <td>14-Oct-2025</td>
                <td><span className="status pending">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div> */}

        <div className="alerts-table-container">
      <Table columns={columns} data={alerts} showSearch = "false"/>
    </div>
      </section>
    
  </>
  )
};

export default Dashboard;