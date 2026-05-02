import { NavLink, Outlet } from "react-router-dom";

function SettingsLayout() {
  return (
    <div className="settings-layout">
      <div className="page-header">
        <h2>Settings</h2>
        <p className="page-subtitle">Manage your account preferences</p>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <NavLink
            to={"."}
            end
            className={({ isActive }) =>
              isActive ? "settings-tab active" : "settings-tab"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to={"notifications"}
            className={({ isActive }) =>
              isActive ? "settings-tab active" : "settings-tab"
            }
          >
            Notifications
          </NavLink>
        </div>

        <div className="settings-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default SettingsLayout;
