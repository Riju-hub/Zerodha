import React from 'react';

function StepDemat() {
    return (
        <div className="container mt-5 p-3">
            <div className="row align-items-center">
                <h2 className='text-center mb-5 fw-normal'>Steps to open a demat account with Zerodha</h2>
                
                {/* Left Side: Image */}
                <div className="col-lg-6 p-3">
                    <img src="media/steps-acop.svg" style={{ width: "90%" }} alt="steps" />
                </div>

                {/* Right Side: Step List */}
                <div className="col-lg-6 p-3">
                    {/* Step 1 */}
                    <div className="d-flex align-items-center mb-4">
                        <span className="step-number">01</span>
                        <p className="ms-4 mb-0 fs-4 text-dark">Enter the requested details</p>
                    </div>
                    <hr className="text-muted opacity-25" />

                    {/* Step 2 */}
                    <div className="d-flex align-items-center my-4">
                        <span className="step-number">02</span>
                        <p className="ms-4 mb-0 fs-4 text-dark">Complete e-sign & verification</p>
                    </div>
                    <hr className="text-muted opacity-25" />

                    {/* Step 3 */}
                    <div className="d-flex align-items-center mt-4">
                        <span className="step-number">03</span>
                        <p className="ms-4 mb-0 fs-4 text-dark">Start investing!</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .step-number {
                    border: 1px solid #eee;
                    border-radius: 50%;
                    min-width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9b9b9b;
                    font-size: 0.9rem;
                }
                h2 {
                    color: #424242;
                }
                p {
                    color: #424242;
                }
            `}</style>
        </div>
    );
}

export default StepDemat;