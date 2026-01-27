import "./Sidebar.css";

const Sidebar = ({ collapsed }) => {
  return (
    <nav className={collapsed ? "menu-bar collapsed" : "menu-bar"}>
      <ul class="menu">
        <li>
          <a href="pages/users.html">
            <span class="material-icons">person</span> User
          </a>
        </li>

        <li class="dropdown has-submenu">
          <a>
            {" "}
            <span class="material-icons">inventory_2</span> Inventory{" "}
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="pages/inventory.html">
                <span class="material-icons">inventory</span> Inventory
              </a>
            </li>
            <li>
              <a href="pages/accessory.html">
                <span class="material-icons">headphones</span> Accessories
              </a>
            </li>
            <li>
              <a href="pages/peripheral.html">
                <span class="material-icons">keyboard</span> Peripherals
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="pages/issueItem.html">
            <span class="material-icons">assignment_ind</span> Issue To
          </a>
        </li>

        <li>
          <a href="pages/repair.html">
            <span class="material-icons">build</span> Repair
          </a>
        </li>

        <li>
          <a href="pages/upgrade.html">
            <span class="material-icons">upgrade</span> Upgrade
          </a>
        </li>

        <li>
          <a href="pages/report.html">
            <span class="material-icons">bar_chart</span> Report
          </a>
        </li>
        <li>
          <a href="test.html">
            <span class="material-icons">bar_chart</span> Test Page
          </a>
        </li>
      </ul>
      <div class="user-details">
        <a href="#" id="userToggle">
          <span class="material-icons">account_circle</span>
          John Doe
        </a>
        <div class="user-panel" id="userPanel">
          <button onclick="location.href='pages/profile.html'">
            <span class="material-icons">person</span> Profile
          </button>
          <button>
            <span class="material-icons">image</span> Change Image
          </button>
          <button><span class="material-icons">logout</span> Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
