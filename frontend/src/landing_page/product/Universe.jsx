import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Universe() {
    const navigate = useNavigate();
    const location = useLocation(); 
    
    const handleSignupClick = (e) => {
        
        if (e) e.preventDefault();

        if (location.pathname === "/signUp") {
            // 2. Instead of navigating, we manually scroll the window
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            const event = new CustomEvent("triggerTypeEffect");
            window.dispatchEvent(event);
        } else {
            // 3. If we are on Home/About/Pricing, then we navigate
            navigate("/signUp?autoFill=true");
            // Optional: Scroll to top after navigation for a clean start
            window.scrollTo(0, 0);
        }
    };
    return ( 
        <div className="container mt-3 p-5">
            <div className="row text-center align-items-center">
                <h2>The Zerodha Universe</h2>
                <p className='p-3 fs-5' style={{color:"#000"}}>Extend your trading and investment experience even further with our partner platforms</p>
                
                <div className="col-lg-4 p-3 mt-5">
                <img src="media/smallcaseLogo.png" />
                <p className="text-small text-muted mt-2">Thematic investment platform</p>
                </div>
                <div className="col-lg-4 p-3 mt-5">
                <img src="media/streakLogo.png" style={{width:"42%"}} />
                <p className="text-small text-muted mt-2">Algo & strategy platform</p>
                </div>
                <div className="col-lg-4 p-3 mt-5">
                <img src="media\sensibullLogo.svg" style={{width:"60%"}}/>
                <p className="text-small text-muted mt-2">Options tranding platform</p>
                </div>
                <div className="col-lg-4 p-3 mt-5">
                <img src="media\zerodhaFundhouse.png" style={{width:"55%"}}/>
                <p className="text-small text-muted mt-2">Asset management</p>
                </div>
                <div className="col-lg-4 p-3 mt-5">
                <img src="media\goldenpiLogo.png" style={{width:"50%"}}/>
                <p className="text-small text-muted mt-2">Bonds tranding platform</p>
                </div>
                <div className="col-lg-4 p-3 mt-5">
                <img src="media\dittoLogo.png" style={{width:"45%"}}/>
                <p className="text-small text-muted mt-2">Insurance</p>
                </div>
                 <button className="p-2 btn btn-primary w-75 w-lg-25 fs-5 mb-5 mt-5"
                style={{width:"20%", margin:"0 auto"}}
                onClick={handleSignupClick}
                >
                    {location.pathname === "/signUp" ? "Start Now" : "Sign Up Now"}</button>

            </div>
        </div>
     );
}

export default Universe;