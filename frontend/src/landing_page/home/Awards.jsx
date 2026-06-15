import React from 'react';
function Awards() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                {/* <div className="col-6 p-5 "> */}
                <div className="col-12 col-md-6 p-md-5 text-center">
                    <img
                        src="media/largestBroker.svg" 
                        alt="Largest Broker Illustration" 
                        className="img-fluid p-3"
                    />
                </div>
                {/* <div className="col-6 p-5 mt-5"> */}
                <div className="col-12 col-md-6 p-md-5 p-4 mt-4 mt-md-5">
                    <h1>largest stock broker in India</h1>
                    <p className='mb-5'>2+ million zerodha clients contributes to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul>
                                <li>Features and Options</li>
                                <li>Commodity and derivaties</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li>Stock & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img 
                        src="media\pressLogos.png" 
                        alt="Press Logos" 
                        className="img-fluid" 
                        style={{width:"90%"}}
                    />
                </div>
            </div>
        </div>
     );
}

export default Awards;