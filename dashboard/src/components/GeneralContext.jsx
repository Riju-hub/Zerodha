import React, { useState, useEffect } from "react";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  refreshHoldings: () => {},
  allHoldings: [],
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [holdingsRefreshTrigger, setHoldingsRefreshTrigger] = useState(0);
  const [mode, setMode] = useState("BUY");
  const [allHoldings, setAllHoldings] = useState([]);

  // fetch holdings on mount and whenever refresh trigger changes
  // const [errorMessage, setErrorMessage] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  // const showNotification = (msg) => {
  //   setErrorMessage(msg);
  //   // Auto-hide after 3 seconds
  //   setTimeout(() => {
  //     setErrorMessage("");
  //   }, 3000);
  // };

  const showNotification = (msg, type = "error") => {
    setNotification({ message: msg, type: type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  useEffect(() => {
    axios.get("https://zerodha-backend-hm17.onrender.com/allHoldings").then((res) => {
      setAllHoldings(res.data);
    });
  }, [holdingsRefreshTrigger]);

  const handleOpenBuyWindow = (uid, actionMode = "BUY") => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setMode(actionMode);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleRefreshHoldings = () => {
    setHoldingsRefreshTrigger(prev => prev + 1);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        refreshHoldings: handleRefreshHoldings,
        holdingsRefreshTrigger,
        mode,
        allHoldings,
        // Notification functions
        showNotification,
        // errorMessage,
        notification, // Pass the whole object
      }}
    >
      {props.children}

      {/* CHANGED: Dynamic class based on type (success or error) */}
      {notification.message && (
        <div className={`notification-popup-nav ${notification.type}`}>
          {notification.message}
        </div>
      )}
      
      {/* The Popup UI */}
      {/*  {errorMessage && (
        <div className="error-popup-nav">
          {errorMessage}
        </div>
      )} */}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={mode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
