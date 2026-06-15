import React from 'react';
function Hero() {
    return ( 
        <div className="container p-3 mb-5 mt-5">
            <div className="row text-center p-3">
                <img src="media/homeHero.png" alt="Hero Image" className='mb-5' />
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online Platform to invest in stock, derivatives, mutual funds, and more</p>
                <button 
                    className="btn btn-primary fs-5 mb-5 mt-3 w-75 w-lg-25 w-md-50 mx-auto p-2" 
                    style={{width:"20% !important", margin:"0 auto"}}
                >
                    SignUp Now
                </button>
            </div>
        </div>
     );
}

export default Hero;