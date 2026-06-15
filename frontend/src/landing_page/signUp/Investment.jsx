import React from 'react';

function Investment() {
    return ( 
         <div className="container mt-3 p-3">
            <div className="row align-items-center text-center">
                <h2 className='text-center mb-5'>Investment options with Zerodha demat account</h2>
                <div className="col-lg-2 p-3 mt-5">
                    <img src="media/stocks-acop.svg" />
                </div>
                <div className="col-lg-3 p-3 mt-5">
                    <h3>Stocks</h3>
                    <p className="text-small fs-6 text-muted mt-2">Invest in all exchange-listed securities</p>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-2 p-3 mt-5">
                    <img src="media\mf-acop.svg" style={{width:"60%"}}/>
                </div>
                <div className="col-lg-3 p-3 mt-5">
                    <h3>Mutual funds</h3>
                    <p className="text-small fs-6 text-muted mt-2">Options tranding platformInvest in commission-free direct mutual funds</p>
                </div>
                <div className="col-lg-2 p-3 mt-5">
                    <img src="media\ipo-acop.svg" style={{width:"50%"}}/>
                </div>
                <div className="col-lg-3 p-3 mt-5">
                    <h3>IPO</h3>
                    <p className="text-small fs-6 text-muted mt-2">Apply to the latest IPOs instantly via UPI</p>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-2 p-3 mt-5">
                    <img src="media\fo-acop.svg" style={{width:"50%"}}/>
                </div>
                <div className="col-lg-3 p-3 mt-5">
                    <h3>Futures & options</h3>
                    <p className="text-small fs-6 text-muted mt-2">Hedge and mitigate market risk through simplified F&O trading</p>
                </div>
            </div>
        </div>
     );
}

export default Investment; 