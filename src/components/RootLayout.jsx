import { NavLink, Outlet } from "react-router-dom";

function RootLayout({ children }) {
  return (
    <div className="root-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="logo-icon">⬡</span>
          <h1>HelpDesk</h1>
        </div>

        <nav className="sidebar-nav">
          {/* trainees: convert these to proper navigation */}
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">▦</span>
            Dashboard
          </NavLink>
          <NavLink
            to={"/tickets"}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">▦</span>
            Tickets
          </NavLink>
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">▦</span>
            Settings
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="user-badge">
            <div className="user-avatar">JD</div>
            <div className="user-info">
              <span className="user-name">Jane Doe</span>
              <span className="user-role">Support Lead</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
