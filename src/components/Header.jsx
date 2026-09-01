function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <div>
        <h1>Enterprise Analytics</h1>
        <p>Welcome back, Admin</p>
      </div>

      <div className="header-actions">
        <input
          className="header-search"
          type="text"
          placeholder="Search..."
        />

        <button className="icon-button">
          🔔
        </button>

        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="profile">
          <div className="avatar">A</div>

          <div>
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;