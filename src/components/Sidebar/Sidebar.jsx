import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();

  return (
    <nav className={collapsed ? "menu-bar collapsed" : "menu-bar"}>
      <ul className="menu">
        <li>
          <Link to="/users">
            <span className="material-icons">person</span>
            User
          </Link>
        </li>

        {/* INVENTORY (HOVER) */}
        <li className="dropdown has-submenu">
          <button type="button" className="menu-btn menu-link">
            <span className="material-icons">inventory_2</span>
            Inventory
          </button>

          <ul className="dropdown-menu">
            <li>
              <Link to="/inventory">
                <span className="material-icons">inventory</span> Inventory
              </Link>
            </li>
            <li>
              <Link to="/accessory">
                <span className="material-icons">headphones</span> Accessories
              </Link>
            </li>
            <li>
              <Link to="/peripheral">
                <span className="material-icons">keyboard</span> Peripherals
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/issue-item">
            <span className="material-icons">assignment_ind</span> Issue To
          </Link>
        </li>

        <li>
          <Link to="/repair">
            <span className="material-icons">build</span> Repair
          </Link>
        </li>

        <li>
          <Link to="/upgrade">
            <span className="material-icons">upgrade</span> Upgrade
          </Link>
        </li>

        <li>
          <Link to="/report">
            <span className="material-icons">bar_chart</span> Report
          </Link>
        </li>

        <li>
          <Link to="/test">
            <span className="material-icons">bar_chart</span> Test Page
          </Link>
        </li>
      </ul>

      {/* USER DETAILS (HOVER) */}
      <div className="user-details">
        <button className="user-toggle">
          <span className="material-icons">account_circle</span>
          John Doe
        </button>

        <div className="user-panel">
          <button onClick={() => navigate("/profile")}>
            <span className="material-icons">person</span> Profile
          </button>

          <button>
            <span className="material-icons">image</span> Change Image
          </button>

          <button>
            <span className="material-icons">logout</span> Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
