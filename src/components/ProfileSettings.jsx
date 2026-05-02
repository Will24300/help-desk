function ProfileSettings() {
  return (
    <div className="profile-settings">
      <h3>Profile Information</h3>
      <p className="settings-description">
        Update your personal details and contact information.
      </p>

      <div className="form-group">
        <label className="form-label">Full Name</label>
        <input
          type="text"
          className="form-input"
          defaultValue="Jane Doe"
          readOnly
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email Address</label>
        <input
          type="email"
          className="form-input"
          defaultValue="jane.doe@helpdesk.com"
          readOnly
        />
      </div>

      <div className="form-group">
        <label className="form-label">Role</label>
        <input
          type="text"
          className="form-input"
          defaultValue="Support Lead"
          readOnly
        />
      </div>

      <div className="form-group">
        <label className="form-label">Department</label>
        <input
          type="text"
          className="form-input"
          defaultValue="Customer Support"
          readOnly
        />
      </div>

      <button className="btn btn-primary" disabled>
        Save Changes
      </button>
    </div>
  );
}

export default ProfileSettings;
