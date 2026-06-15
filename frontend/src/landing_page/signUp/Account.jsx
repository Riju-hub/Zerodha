import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Account() {
  const navigate = useNavigate();
  const location = useLocation();
  const emailInputRef = useRef(null); 

  const [showModal, setShowModal] = useState(false);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get("type") === "true") {
      const targetEmail = "bhabasindhu@example.com"; 
      let i = 0;

      if (emailInputRef.current) emailInputRef.current.focus();

      const typingInterval = setInterval(() => {
        setInputValue((prev) => ({
          ...prev,
          email: targetEmail.slice(0, i + 1),
        }));
        i++;
        if (i >= targetEmail.length) clearInterval(typingInterval);
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [location.search]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodha-backend-hm17.onrender.com/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;

      if (success) {
        setShowModal(true); 

        setTimeout(() => {
          setShowModal(false);
          navigate("/kite");
        }, 3000); 
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="container mt-3 p-3" style={{ position: "relative" }}>
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <div style={{ fontSize: "50px" }}>✅</div>
            <h3>Signup Complete!</h3>
            <p>Welcome to the Zerodha Universe. Redirecting you to home...</p>
          </div>
        </div>
      )}

      <div className="row align-items-center">
        <div className="col-lg-6 p-3">
          <img src="media/account_open.svg" alt="Open Account" />
        </div>
        <div className="col-lg-6 p-3 mt-3">
          <div className="form_container">
            <h2>Signup Account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email</label>
                <input
                  ref={emailInputRef} 
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

const modalOverlayStyle = {
  position: "fixed",
  top: 0, left: 0, width: "100%", height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex", justifyContent: "center", alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
};

export default Account;