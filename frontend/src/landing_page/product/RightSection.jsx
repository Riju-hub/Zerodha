import React from 'react';

function RightSection({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
        <div className="container mt-3 p-3">
            <div className="row align-items-center">
                <div className="col-lg-5 p-3 mt-3">
                    <h1 className='mt-3 mb-3'>{productName}</h1>
                    <p className='fs-4'>{productDescription}</p>
                    <div className='mt-4'>
                        <a href={learnMore} style={{textDecoration:"none"}} className='fs-5'>Learn More<i class="fa-solid fa-arrow-right"></i></a>
                    </div> 
                </div>
                <div className="col-lg-1 p-3 mt-3"></div>
                <div className="col-lg-6 p-3">
                    <img src={imageURL} alt="" style={{width:"80%"}}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;