import { useState } from "react";

function Settings() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [liveReports, setLiveReports] = useState(false);
  const [defaultView, setDefaultView] = useState("Overview");

  return (
    <section className="page-content">
      <div className="page-heading">
        <div>
          <h2>Settings</h2>
          <p>Configure your enterprise portal preferences and policies.</p>
        </div>

        <div className="date-badge">System Settings</div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <div className="section-heading">
            <div>
              <h3>Workspace Preferences</h3>
              <p>Adjust your business portal behavior.</p>
            </div>
          </div>

          <div className="setting-row">
            <div>
              <strong>Email alerts</strong>
              <p>Receive weekly summary updates.</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={() => setEmailAlerts((current) => !current)}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="setting-row">
            <div>
              <strong>Two-factor authentication</strong>
              <p>Require an extra verification step for admin access.</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={twoFactor}
                onChange={() => setTwoFactor((current) => !current)}
              />
              <span className="toggle-slider" />
            </label>
          </div>

          <div className="setting-row">
            <div>
              <strong>Live report sync</strong>
              <p>Push dashboard data updates every 15 minutes.</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={liveReports}
                onChange={() => setLiveReports((current) => !current)}
              />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>

        <div className="settings-card">
          <div className="section-heading">
            <div>
              <h3>Default Workspace</h3>
              <p>Choose the default page shown after login.</p>
            </div>
          </div>

          <label className="field-label" htmlFor="default-view">
            Default landing page
          </label>
          <select
            id="default-view"
            className="settings-select"
            value={defaultView}
            onChange={(event) => setDefaultView(event.target.value)}
          >
            <option value="Overview">Overview</option>
            <option value="Analytics">Analytics</option>
            <option value="Customers">Customers</option>
            <option value="Reports">Reports</option>
          </select>

          <div className="settings-summary">
            <span>Current preference</span>
            <strong>{defaultView}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
