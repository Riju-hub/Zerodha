import React from "react";
import { Route, Routes } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Profile from "./Profile";
import Security from "./Security";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content w-100">
        <Routes>
          <Route exact path="*" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/security" element={<Security />} />
          {/* NEW: Mobile Fullscreen Watchlist Route */}
           <Route 
             path="/watchlist" 
             element={
               <GeneralContextProvider>
                 <WatchList />
               </GeneralContextProvider>
             } 
           />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
