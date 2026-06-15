import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ShortcutsModal from "./ShortcutsModal";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);

  // Get real data from localStorage
  const username = localStorage.getItem("username") || "User";
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";

  const menuRef = useRef(null);

  const location = useLocation();

  // Helper mapping function to return the correct text based on active URL
  const getPageTitle = (path) => {
    switch (path) {
      case "/":
        return "Dashboard";
      case "/orders":
        return "Orders";
      case "/holdings":
        return "Holdings";
      case "/positions":
        return "Positions";
      case "/funds":
        return "Funds";
      case "/profile":
        return "My Profile";
      case "/watchlist":
        return "Marketwatch";
      default:
        return "Dashboard"; // Fallback text
    }
  }

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleLogout = async () => {
    try {
      await axios.post("https://zerodha-backend-hm17.onrender.com/logout", {}, { withCredentials: true });
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("username");
      localStorage.removeItem("userEmail");
      window.location.href = "http://localhost:5174/login";
    } catch (err) {
      console.log("Logout failed", err);
    }
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  

  return (
    <div className="menu-container" ref={menuRef}>
      <Link to="/">
        <img src="media/kite-tab-logo.png" style={{ width: "50px" }} alt="Kite Logo" />
      </Link>
      
      {/* Dynamic Mobile Page Title (Hidden on desktop via CSS, visible on mobile) */}
      <div className="mobile-page-title">
        <h2>{getPageTitle(location.pathname)}</h2>
      </div>
      <div className="menus">
        {/* Desktop Top Navbar (Hidden automatically on mobile via your CSS) */}
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
        </ul>
        <hr />
        
        {/* User Profile Avatar Toggle */}
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username.charAt(0).toUpperCase()}</div>
          <p className="username">{username}</p>
        </div>

        {/* --- Profile Dropdown Modal (Morphs to mobile menu via CSS) --- */}
        {isProfileDropdownOpen && (
          <div className="profile-dropdown mt-3">
            {/* Desktop-only user header container */}
            <div className="user-details">
              <p className="name">{username}</p>
              <p className="email">{userEmail}</p>
            </div>
            <hr />
            
            {/* Nav Links Matching image_6fa5e1.png perfectly */}
            <div className="dropdown-links">
              {/* Marketwatch (New for Mobile View) */}
              <Link to="/watchlist" onClick={() => setIsProfileDropdownOpen(false)} className="mobile-only-link">
                <i className="fa-regular fa-bookmark"></i> Marketwatch
              </Link>

              {/* Dashboard */}
              <Link to="/" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="fa-regular fa-compass"></i> Dashboard
              </Link>

              {/* Orders */}
              <Link to="/orders" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="fa-solid fa-list-check"></i> Orders
              </Link>

              {/* Holdings */}
              <Link to="/holdings" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="fa-solid fa-briefcase"></i> Holdings
              </Link>

              {/* Positions */}
              <Link to="/positions" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="fa-solid fa-chart-line"></i> Positions
              </Link>

              {/* Bids (New for Mobile View) */}
              <Link to="/orders" onClick={() => setIsProfileDropdownOpen(false)} className="mobile-only-link">
                <i className="fa-regular fa-clock"></i> Bids
              </Link>

              {/* Funds */}
              <Link to="/funds" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="fa-solid fa-wallet"></i> Funds
              </Link>

              {/* Profile / Settings */}
              <Link to="/profile" onClick={() => setIsProfileDropdownOpen(false)}>
                <i className="fa-regular fa-user"></i> My profile <span className="settings-fade">/ Settings</span>
              </Link>

              {/* Support Link */}
              <Link to="https://kite.zerodha.com/connect/login?api_key=supportportal" target="_blank" rel="noopener noreferrer">
                <i className="fa-regular fa-life-ring"></i> Support
              </Link>

              {/* Logout */}
              <Link onClick={handleLogout} className="logout">
                <i className="fa-solid fa-sign-out-alt"></i> Logout
              </Link>
            </div>
          </div>
        )}
      </div>
      {isShortcutsOpen && <ShortcutsModal onClose={() => setIsShortcutsOpen(false)} />}
    </div>
  );
};

export default Menu;