import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Security.css"; // Import the CSS file for styling

const Security = () => {
  useEffect(() => {
    document.title = "Edit - Profile / Kite";
  }, []);

  // 1. State for input values
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  // State for password visibility
  const [showPass, setShowPass] = useState({ current: false, new: false, confirm: false });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleVisibility = (field) => {
    setShowPass(prev => ({ ...prev, [field]: !prev[field] }));
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    try {
    const { data } = await axios.post(
      "https://zerodha-backend-hm17.onrender.com/change-password", // Ensure port matches your server
      {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      },
      { withCredentials: true } // Required to send the JWT cookie
    );

    if (data.success) {
      alert(data.message);
      setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } else {
      alert(data.message); // Displays "Current password is incorrect", etc.
    }
  } catch (error) {
    console.error("Change Password Error:", error);
    alert("An error occurred while changing the password.");
  }
};

  return (
    <div className="security-wrapper">
      <h2 className="main-section-title">Account security</h2>
      
      <div className="security-row">
        <div className="password-column">
          <h3 className="sub-section-title">Change password</h3>
          <form onSubmit={handleSubmit}>
          {/* Input Group 1 */}
          <div className="floating-label-group">
            <input 
            name="currentPassword"
              type={showPass.current ? "text" : "password"} 
              className="kite-input"
              value={formData.currentPassword}
              onChange={handleChange}
              required 
            />
            <label className="floating-label">Current password</label>
            <i 
              className={`fa-regular ${showPass.current ? 'fa-eye-slash' : 'fa-eye'} kite-eye`} 
              onClick={() => toggleVisibility('current')}
            ></i>
          </div>

          {/* Input Group 2 */}
          <div className="floating-label-group">
            <input 
            name="newPassword"
              type={showPass.new ? "text" : "password"} 
              className="kite-input"
              value={formData.newPassword}
              onChange={handleChange}
              required 
            />
            <label className="floating-label">New password</label>
            <i 
              className={`fa-regular ${showPass.new ? 'fa-eye-slash' : 'fa-eye'} kite-eye`} 
              onClick={() => toggleVisibility('new')}
            ></i>
          </div>

          {/* Input Group 3 */}
          <div className="floating-label-group">
            <input 
                name="confirmPassword"
                type={showPass.confirm ? "text" : "password"} 
                className="kite-input"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
            />
            <label className="floating-label">Confirm new password</label>
            <i 
              className={`fa-regular ${showPass.confirm ? 'fa-eye-slash' : 'fa-eye'} kite-eye`} 
              onClick={() => toggleVisibility('confirm')}
            ></i>
          </div>

          <div className="kite-btn-group">
            <button className="btn-kite-submit" type="submit">Submit</button>
            <button className="btn-kite-cancel" type="button" 
                onClick={() => setFormData({currentPassword: "", newPassword: "", confirmPassword: ""})}
                >Cancel
            </button>
          </div>
          </form>
        </div>

        <div className="tips-column">
          <h4 className="tips-header">Password tips</h4>
          <ul className="kite-tips-list">
            <li>Choose long passwords.</li>
            <li>
              Meaningless phrases made up of multiple words make for secure passwords. 
              Eg: <span className="text-muted">icy mangoes fly kites high</span>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Security;