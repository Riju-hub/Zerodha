import React, { useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";

function Kite() {
    const [showPassword, setShowPassword] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: "", type: "" });
    const navigate = useNavigate();
    
    // Auto-hide notification after 3 seconds
    useEffect(() => {
    document.title = "Login to Kite by Zerodha - Fast, easy trading and investment platform";
        if (notification.show) {
            const timer = setTimeout(() => {
                setNotification({ ...notification, show: false });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notification]);

    // --- ADD THIS LOGIC ---
    const handleLogin = async(e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        try {
            const { data } = await axios.post(
                "http://localhost:5000/login",
                { username, password },
                { withCredentials: true }
            );

            if (data.success) {
                // Store simple flags for the UI
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", data.user.username);
                localStorage.setItem("userEmail", data.user.email);
                
                // Redirect to the Dashboard app (usually on port 5174 or similar)
                // If they are on the same domain/port, use navigate("/")
                setTimeout(() => {
                    window.location.href = "/";
                },1200);
                
            } else {
                setNotification({ show: true, message: data.message, type: "error" });
            }
        } catch (error) {
            setNotification({ show: true, message: "Login failed. Please try again.", type: "error" });
        }
    };

    return (
        <div className="kite-wrapper">
            {/* --- NOTIFICATION POPUP --- */}
            {notification.show && (
                <div className={`notification-popup ${notification.type}`}>
                    <span className="icon">{notification.type === "success" ? "✓" : "✕"}</span>
                    {notification.message}
                </div>
            )}
            <div className="kite-card">
                <div className="text-center mb-4">
                    <img src="media/kite-logo.svg" alt="Kite Logo" className="kite-logo" />
                    <h2 className="kite-title">Login to Kite</h2>
                </div>

                <form onSubmit={handleLogin} >
                    <div className="input-group-custom mb-4">
                        <input type="text" required placeholder=" " id="username" name="username" />
                        <label htmlFor="username">Username</label>
                    </div>

                    <div className="input-group-custom mb-4">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            required 
                            placeholder=" " 
                            id="password" 
                            name="password"
                        />
                        <label htmlFor="password">Password</label>
                        <span 
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "👁️" : "👁️‍🗨️"}
                        </span>
                    </div>

                    <button type="submit" className="btn-kite-login">Login</button>
                    
                    <div className="text-center mt-3">
                        <Link to="/forgot" className="kite-link">Forgot user ID or password?</Link>
                    </div>
                </form>
            </div>

            <div className="kite-footer text-center mt-4">
                <div className="store-icons mb-3">
                    {/* 1. Google Play Store Link */}
                    <a href="https://play.google.com/store/apps/details?id=com.zerodha.kitelogin" target="_blank" rel="noopener noreferrer">
                        <img src="media/google-play.svg" alt="Play Store" />
                    </a>
                    {/* 2. Apple App Store Link */}
                    <a href="https://apps.apple.com/in/app/kite-by-zerodha/id1124054628" target="_blank" rel="noopener noreferrer" className="ms-3">
                        <img src="media/apple-store.svg" alt="Apple Store" />
                    </a>
                </div>
                {/* 3. Click Zerodha Logo move to Frontend (5173) */}
                <a href="http://localhost:5173">
                    <img src="media/zerodha-logo.svg" alt="Zerodha" className="footer-brand mb-2" />
                </a>
                {/* 4. Sign up for free points to Frontend (5173/signUp) */}
                <p className="footer-text">
                    Don't have an account?{" "}
                    <a href="http://localhost:5173/signUp" className="text-decoration-none">
                        Sign up for free!
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Kite;