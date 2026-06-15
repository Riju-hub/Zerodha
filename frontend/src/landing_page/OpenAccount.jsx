import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();
    const location = useLocation(); 
    const handleSignupClick = () => {
        if (location.pathname === "/signUp") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const event = new CustomEvent("triggerTypeEffect");
            window.dispatchEvent(event);
        } else {
            navigate("/signUp?autoFill=true");
            window.scrollTo(0, 0);
        }
    };
    return ( 
        <div className="container p-3 mb-5">
            <div className="row p-3 text-center text-med">
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
                F&O trades.</p>
                <button className="p-2 btn btn-primary fs-5 mb-5 mt-4"
                style={{ width: "220px", margin: "0 auto", backgroundColor: "#387ed1", border: "none" }}
                 onClick={handleSignupClick}>
                    {location.pathname === "/signUp" ? "Start Now" : "Sign Up Now"}
                </button>
            </div>
        </div>
     );
}

export default OpenAccount;