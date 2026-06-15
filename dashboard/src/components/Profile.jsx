import React, {useState,useEffect} from "react";
import Security from "./Security";
import "./Profile.css"; // We'll define the styles below

const Profile = () => {
  const [showSecurity, setShowSecurity] = useState(false);

  useEffect(() => {
    document.title = "Profile / Kite";
  }, []);


  // Function to switch theme
  const handleThemeChange = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };
  // Get real data from localStorage
  const username = localStorage.getItem("username") || "Demo User";
  const userEmail = localStorage.getItem("userEmail") || "demo@zerodha.com";

  return (
    <div className="profile-page-container">
      {/* Top Warning Banner */}
      {/* <div className="demo-banner">
        <i className="fa-solid fa-triangle-exclamation"></i>
        <span> This is a demo platform with dummy data. <a href="#">Signup now</a> to access the live platform.</span>
      </div> */}

      <div className="profile-header">
        <h1>Profile</h1>
        <div className="header-links">
          <a href="#">Apps</a>
          {/* <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)}>
                <i class="fa-regular fa-user"></i> My profile / Settings
          </Link> */}
          <a href="/security" onClick={() => setShowSecurity(true)}> Password & Security</a>
        </div>
      </div>

      <hr className="divider" />

      {/* Profile Section */}
      <div className="profile-section">
        <div className="avatar-wrapper">
          <div className="large-avatar">{username.charAt(0).toUpperCase()}</div>
          <a href="#" className="change-photo">Change photo</a>
        </div>
        <div className="user-info">
          <h2>{username}</h2>
        </div>
      </div>

      <div className="account-grid">
        {/* Account Details */}
        <div className="grid-item">
          <div className="section-title">
            <h3>Account</h3>
            <a href="#" className="manage-link"><i className="fa-solid fa-gear"></i> Manage</a>
          </div>
          <div className="info-row">
            <span className="label">Support code</span>
            <span className="value blue-text"><i className="fa-solid fa-eye"></i> View</span>
          </div>
          <div className="info-row">
            <span className="label">E-mail</span>
            <span className="value">{userEmail}</span>
          </div>
          <div className="info-row">
            <span className="label">PAN</span>
            <span className="value">*123C</span>
          </div>
          <div className="info-row">
            <span className="label">Phone</span>
            <span className="value">*1234</span>
          </div>
          <div className="info-row">
            <span className="label">Demat (BO)</span>
            <span className="value blue-text">1200000000011111</span>
          </div>
          <div className="info-row">
            <span className="label">Segments</span>
            <span className="value blue-text">NFO, MF, CDS, MCX, BSE, NSE</span>
          </div>
          <div className="info-row">
            <span className="label">Demat authorisation</span>
            <span className="value blue-text">POA</span>
          </div>
        </div>

        {/* Bank Accounts */}
        <div className="grid-item">
          <div className="section-title">
            <h3>Bank accounts</h3>
            <a href="#" className="manage-link"><i className="fa-solid fa-gear"></i> Manage</a>
          </div>
          <div className="info-row">
            <span className="value font-bold">*1234 <span className="bank-name">ICICI BANK</span></span>
          </div>
        </div>
      </div>
      {/* ... existing code above ... */}
      
      <div className="account-grid mt-5">
        {/* Settings Section */}
        <div className="grid-item">
          <div className="section-title">
            <h3>Settings</h3>
          </div>
          
          <div className="info-row align-center">
            <span className="label">Chart</span>
            <div className="radio-group">
              <label><input type="radio" name="chart" defaultChecked /> ChartIQ</label>
              <label><input type="radio" name="chart" /> TradingView v1.0</label>
              <label>
                <input type="radio" name="chart" /> TradingView v2.0 
                <span className="beta-tag">BETA</span>
              </label>
            </div>
          </div>

          <div className="info-row align-center">
            <span className="label">Theme</span>
            <div className="radio-group">
              <label><input type="radio" name="theme" defaultChecked={localStorage.getItem('theme') !== 'dark'} 
          onChange={() => handleThemeChange('light')} /> Default</label>
              <label><input type="radio" name="theme" checked={localStorage.getItem('theme') === 'dark'} 
          onChange={() => handleThemeChange('dark')} /> Dark</label>
            </div>
          </div>

          <div className="info-row align-center">
            <span className="label">Instant order updates</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="info-row align-center">
            <span className="label">Sticky order window</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Sessions Section */}
        <div className="grid-item">
          <div className="section-title">
            <h3>Sessions</h3>
            <a href="#" className="manage-link blue-text">Clear all</a>
          </div>
          <ul className="session-list">
            <li>Kite web</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;