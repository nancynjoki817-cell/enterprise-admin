import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>◆</span>
        <h2>Analytica</h2>
      </div>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          📈 Analytics
        </NavLink>

        <NavLink
          to="/customers"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          👥 Customers
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          📋 Reports
        </NavLink>

        <a href="#settings">
          ⚙️ Settings
        </a>
      </nav>

      <div className="sidebar-footer">
        <p>Enterprise Portal</p>
        <small>Admin Dashboard</small>
      </div>
    </aside>
  );
}

export default Sidebar;