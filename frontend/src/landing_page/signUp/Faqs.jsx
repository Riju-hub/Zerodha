import React from 'react';

function Faqs() {
    const faqData = [
        { q: "What is a Zerodha account", a: "A Zerodha account consists of a trading account to buy/sell stocks and a demat account to hold them in electronic form." },
        { q: "What documents are required to open a demat account?", a: "You need your PAN card, Aadhaar card, and a cancelled cheque or bank statement." },
        { q: "Is Zerodha account opening free?", a: "Account opening charges vary based on the segment. Usually, it is ₹200 for Equity and ₹100 for Commodity." },
        { q: "Are there any maintenance charges for a demat account?", a: "Yes, Zerodha charges an Annual Maintenance Charge (AMC) of ₹300 + GST per year, billed quarterly." },
        { q: "Can I open a demat account without a bank account?", a: "No, a valid bank account is mandatory to link with your demat and trading account for fund transfers." },
        { q: "What is a Basic Services Demat Account (BSDA)?", a: "BSDA is a special category of demat account for small investors with holdings value below ₹2 lakhs, offering reduced AMC." },
        { q: "Can I open a demat and trading account using the mobile app?", a: "Yes, you can use the Zerodha 'Kite' or 'Coin' apps to start the paperless onboarding process." }
    ];

    return (
        <div className="container my-5 p-3">
            <h2 className="mb-5 fw-normal text-dark">FAQs</h2>
            <div className="accordion accordion-flush" id="faqAccordion">
                {faqData.map((item, index) => (
                    <div className="accordion-item mb-4 border-0 faq-wrapper" key={index}>
                        <div className="blue-line-dynamic"></div>
                        
                        <h2 className="accordion-header">
                            <button 
                                className="accordion-button collapsed bg-white text-dark shadow-none ps-0" 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target={`#collapse${index}`}
                            >
                                <span className="fs-6">{item.q}</span>
                            </button>
                        </h2>
                        
                        <div 
                            id={`collapse${index}`} 
                            className="accordion-collapse collapse" 
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body ps-0 text-muted">
                                {item.a}
                            </div>
                        </div>
                        <hr className="mt-0 opacity-25" />
                    </div>
                ))}
            </div>

            <style jsx>{`
                /* Base state of the line */
                .blue-line-dynamic {
                    width: 60px;
                    height: 4px;
                    background-color: #387ed1;
                    margin-bottom: 5px;
                    transition: width 0.3s ease; /* Smooth transition */
                }

                /* Width increases when the parent wrapper is hovered */
                .faq-wrapper:hover .blue-line-dynamic {
                    width: 100px;
                }

                /* Width stays increased when the accordion is NOT collapsed (i.e., open) */
                .faq-wrapper:has(.accordion-button:not(.collapsed)) .blue-line-dynamic {
                    width: 150px;
                    background-color: #2a69b5; /* Slightly darker when active */
                }

                .accordion-button:not(.collapsed) {
                    background-color: transparent;
                    color: inherit;
                    font-weight: 500;
                }

                .accordion-button:focus {
                    box-shadow: none;
                }
            `}</style>
        </div>
    );
}

export default Faqs;