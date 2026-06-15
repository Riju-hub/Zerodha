import React from 'react';
function Pricing() {
    return ( 
        <div className="container p-3">
            <div className="row p-3">
                <div className="col-lg-4 p-lg-5">
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className=' text-muted'>We pioneered the concept of discount broking and price transparency
                        in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-2 p-lg-5"></div>
                <div className="col-lg-6 p-5 p-lg-5">
                    <div className="row text-center">
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and
                                <br />
                                direct mutual funds
                            </p>
                        </div>
                        <div className="col p-3 border">
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;