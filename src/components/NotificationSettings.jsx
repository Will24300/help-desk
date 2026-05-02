function NotificationSettings() {
  return (
    <div className="notification-settings">
      <h3>Notification Preferences</h3>
      <p className="settings-description">
        Choose how you want to be notified about ticket updates.
      </p>

      <div className="toggle-group">
        <div className="toggle-item">
          <div className="toggle-info">
            <span className="toggle-label">Email Notifications</span>
            <span className="toggle-description">
              Receive email alerts for new tickets and updates
            </span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <div className="toggle-info">
            <span className="toggle-label">Push Notifications</span>
            <span className="toggle-description">
              Get browser push notifications for urgent tickets
            </span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <div className="toggle-info">
            <span className="toggle-label">Weekly Digest</span>
            <span className="toggle-description">
              Receive a weekly summary of ticket activity
            </span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="toggle-item">
          <div className="toggle-info">
            <span className="toggle-label">Sound Alerts</span>
            <span className="toggle-description">
              Play a sound when a new high-priority ticket arrives
            </span>
          </div>
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default NotificationSettings;
