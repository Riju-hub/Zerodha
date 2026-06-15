
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top border-bottom" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        <NavLink className="navbar-brand" to="/">
          <img src="media/logo.svg" style={{ width: "25%" }} alt="Logo" />
          <button 
          className="navbar-toggler border-0 d-lg-none position-absolute end-0 mr-3 p-2" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </NavLink>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0 align-items-center">
            <li className="nav-item"><NavLink className="nav-link" to="/signUp">Signup</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/product">Products</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/pricing">Pricing</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/support">Support</NavLink></li>

            <li className="nav-item dropdown position-static">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-bars fs-4"></i>
              </a>
              
              <div className="dropdown-menu w-50 shadow-sm border p-4" aria-labelledby="navbarDropdown" style={{ top: "90%", left: "50%", right: "2px" }}>
                <div className="container">
                  <div className="row text-center mb-4">
                    <div className="col-3 menu-div mt-2">
                      <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> 
                        <img src="media/kite-logo.svg" alt="Kite" style={{width: "40px"}} />
                        <h6 className="mt-2 mb-0">Kite</h6>
                        <p className="text-muted small mt-2">Trading platform</p>
                      </a>
                    </div>
                    <div className="col-3 menu-div">
                      <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src="media/console-logo.svg" alt="Console" style={{width: "40px"}} />
                        <h6 className="mt-2 mb-0">Console</h6>
                        <p className="text-muted small mt-2">Backoffice</p>
                      </a>
                    </div>
                    <div className="col-3 menu-div">
                      <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src="media/kite-connect-logo.svg" alt="Kite Connect" style={{width: "40px"}} />
                        <h6 className="mt-2 mb-0">Kite Connect</h6>
                        <p className="text-muted small mt-2">Trading APIs</p>
                      </a>
                    </div>
                    <div className="col-3 menu-div">
                      <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                        <img src="media/coin-logo.svg" alt="Coin" style={{width: "40px"}} />
                        <h6 className="mt-2 mb-0">Coin</h6>
                        <p className="text-muted small mt-2">Mutual funds</p>
                      </a>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-4">
                    <div className="col-4">
                      <h5 className="mb-3" style={{ fontSize: "1.1rem" }}>Utilities</h5>
                      <ul className="list-unstyled">
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">Calculators</a></li>
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">Brokerage calculator</a></li>
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">Margin calculator</a></li>
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">SIP calculator</a></li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h5 className="mb-3" style={{ fontSize: "1.1rem" }}>Updates</h5>
                      <ul className="list-unstyled">
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">Z-Connect blog</a></li>
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">Circulars / Bulletin</a></li>
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">IPOs</a></li>
                        <li className="py-1"><a href="#" className="text-decoration-none text-muted">Markets</a></li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <h5 className="mb-3" style={{ fontSize: "1.1rem" }}>Education</h5>
                      <div className="d-flex gap-5">
                        <div className="text-center menu-education-div">
                          <img src="media/varsity-logo.png" alt="Varsity" style={{width: "30px"}} />
                          <p className="small mt-3">Varsity</p>
                        </div>
                        <div className="text-center menu-education-div">
                          <img src="media/tqna-logo.png" alt="Q&A" style={{width: "30px"}} />
                          <p className="small mt-4">Trading Q&A</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-white d-lg-none" style={{ zIndex: 3000, overflowY: "auto" }}>
          <div className="container p-4">
            <div className="text-end mb-4">
              <button className="btn border-0 p-0" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="fa-solid fa-xmark fs-1 text-muted"></i>
              </button>
            </div>

            <div className="row text-start mb-5 gy-4 text-muted ">
              <div className="col-6"><NavLink className="text-decoration-none text-muted fs-5" to="/signUp" onClick={() => setIsMobileMenuOpen(false)}>Signup</NavLink></div>
              <div className="col-6"><NavLink className="text-decoration-none text-muted fs-5" to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink></div>
              <div className="col-6"><NavLink className="text-decoration-none text-muted fs-5" to="/product" onClick={() => setIsMobileMenuOpen(false)}>Products</NavLink></div>
              <div className="col-6"><NavLink className="text-decoration-none text-muted fs-5" to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</NavLink></div>
              <div className="col-6"><NavLink className="text-decoration-none text-muted fs-5" to="/support" onClick={() => setIsMobileMenuOpen(false)}>Support</NavLink></div>
            </div>

            <hr className="opacity-25" />

            <div className="row my-4 gy-4 align-items-center">
              <div className="col-6 menu-div d-flex align-items-center">
                <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none"> 
                  <img src="media/kite-logo.svg"  className="me-2" style={{width:"20%"}}/> 
                  <span className="text-dark">Kite</span>
                </a>
              </div>
              <div className="col-6 menu-div d-flex align-items-center">
                <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img src="media/console-logo.svg" style={{width:"20%"}} className="me-2"/> 
                  <span className="text-dark">Console</span>
                </a>
              </div>
              <div className="col-6 menu-div d-flex align-items-center">
                <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img src="media/kite-connect-logo.svg" style={{width:"20%"}} className="me-2"/> 
                  <span className="text-dark">Kite Connect</span>
                </a>
              </div>
              <div className="col-6 menu-div d-flex align-items-center">
                <a href="http://localhost:5174/login" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img src="media/coin-logo.svg" style={{width:"20%"}} className="me-2"/> 
                  <span className="text-dark">Coin</span>
                </a>
              </div>
              <div className="col-6 d-flex align-items-center"><img src="media/varsity-logo.png" style={{width:"20%"}} className="me-2"/> <span className="text-dark">Varsity</span></div>
              <div className="col-6 d-flex align-items-center"><img src="media/tqna-logo.png" style={{width:"20%"}} className="me-2"/> <span className="text-dark">Trading Q&A</span></div>
            </div>

            <hr className="opacity-25" />

            <div className="row mt-4">
              <div className="col-6">
                <h6 className="fw-bold mb-3 text-dark">Utilities</h6>
                <ul className="list-unstyled small text-muted">
                  <li className="mb-2">Calculators</li>
                  <li className="mb-2">Brokerage calculator</li>
                  <li className="mb-2">Margin calculator</li>
                  <li className="mb-2">SIP calculator</li>
                </ul>
              </div>
              <div className="col-6">
                <h6 className="fw-bold mb-3 text-dark">Updates</h6>
                <ul className="list-unstyled small text-muted">
                  <li className="mb-2">Z-Connect blog</li>
                  <li className="mb-2">Circulars / Bulletin</li>
                  <li className="mb-2">IPOs</li>
                  <li className="mb-2">Markets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;