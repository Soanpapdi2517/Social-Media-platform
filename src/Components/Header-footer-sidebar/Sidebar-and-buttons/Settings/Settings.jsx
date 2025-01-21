const Settings = () => {
  return (
    <div className="settings">
      <div className="container mt-4">
        <h4 className="mb-4 text-dark fs-1 ">Settings</h4>
        <form>
          {/* Profile Settings */}
          <div className="card mb-4">
            <div className="card-header">Profile Settings</div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="Enter your username"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>

          {/* Privacy Settings */}
          <div className="card mb-4">
            <div className="card-header">Privacy Settings</div>
            <div className="card-body">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="privateProfile"
                />
                <label className="form-check-label" htmlFor="privateProfile">
                  Make my profile private
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="showActivity"
                />
                <label className="form-check-label" htmlFor="showActivity">
                  Show my activity status
                </label>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="card mb-4">
            <div className="card-header">Notification Settings</div>
            <div className="card-body">
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="emailNotifications"
                  defaultChecked
                />
                <label
                  className="form-check-label"
                  htmlFor="emailNotifications"
                >
                  Email Notifications
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="pushNotifications"
                />
                <label className="form-check-label" htmlFor="pushNotifications">
                  Push Notifications
                </label>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="card mb-4">
            <div className="card-header">Account Settings</div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter new password"
                />
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-danger">Delete Account</button>
                <button className="btn btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
