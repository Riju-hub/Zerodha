import React from "react";

function Hero() {
  return (
    <div className="container p-3">
      
        <div className="row p-3 mt-5 border-bottom text-center ">
            <h2 className="mt-5">Charges</h2>
            <h5 className="text-muted mt-3">List of all charges and taxes</h5>
        </div>
        <div className="row p-3 mt-5 text-center">
            <div className="col-lg-4 p-4 text-center">
                <img src="media\pricing0.svg" alt="" />
                <h1 className="fs-4 mb-4">Free equity delivery</h1>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-lg-4 p-3 text-center">
                <img src="media\pricing20.svg" alt="" />
                <h1 className="fs-4 mb-4">Intraday and F&O trades</h1>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-lg-4 p-3 text-center">
                <img src="media\pricing0.svg" alt="" />
                <h1 className="fs-4 mb-4">Free direct MF</h1>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  );
}

export default Hero;
