// import React from "react";

// import Menu from "./Menu";

// const TopBar = () => {
//   return (
//     <div className="topbar-container">
//       <div className="indices-container">
//         <div className="nifty">
//           <p className="index">NIFTY 50</p>
//           <p className="index-points">{100.2} </p>
//           <p className="percent"> </p>
//         </div>
//         <div className="sensex">
//           <p className="index">SENSEX</p>
//           <p className="index-points">{100.2}</p>
//           <p className="percent"></p>
//         </div>
//       </div>

//       <Menu />
//     </div>
//   );
// };

// export default TopBar;


import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import Menu from "./Menu";

const TopBar = () => {
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
  };

  return (
    <div className="topbar-container">
      

      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* Dynamic Mobile Page Title (Hidden on desktop via CSS, visible on mobile) */}
      {/* <div className="mobile-page-title">
        <h2>{getPageTitle(location.pathname)}</h2>
      </div> */}

      <Menu />
    </div>
  );
};

export default TopBar;


