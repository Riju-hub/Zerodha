import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className="container mt-3 p-2">
            <div className="row p-2 align-items-center">
                <div className="col-lg-6 p-3">
                    <img src={imageURL} alt=""  style={{width:"80%"}} />
                </div>
                <div className="col-lg-1 p-3 mt-3"></div>
                <div className="col-lg-5 p-3 mt-3">
                    <h1 className='mt-3 mb-3'>{productName}</h1>
                    <p className='fs-4'>{productDescription}</p>
                    <div className='mt-5'>
                        <a href={tryDemo} style={{textDecoration:"none"}} className='fs-5'>TryDemo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}} className='fs-5'>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-5'>
                        <a href={googlePlay}><img src="media\googlePlayBadge.svg" alt="" /></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media\appstoreBadge.svg" alt="" /></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;