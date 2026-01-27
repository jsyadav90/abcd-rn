import "./Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header>
      <div className="header-left">
        <button className="hamburger" onClick={onToggleSidebar}>&#9776;</button>
        <div className="logo"><a href="/">ABCD</a></div>
      </div>

      <div class="header-right">
        <div class="search-container" id="searchBox" role="search">
          <input
            type="text"
            placeholder="Search the application..."
            aria-label="Search the application"
          />
          <div class="search-icon-container">
            <button
              type="button"
              id="searchToggle"
              class="material-icons search-icon"
            >
              search
            </button>
          </div>
        </div>
        <span class="search-icon">&#128269;</span>
      </div>
    </header>
  );
};

export default Header;
