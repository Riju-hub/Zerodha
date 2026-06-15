import React, {useEffect} from 'react';
import Brokerage from './Brokerage';
import Hero from './Hero';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    useEffect(() => {
        document.title = "Zerodha brokerage charges, fees &amp; taxes on trading and investing";
      }, []);
    return ( 
        <>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </>
     );
}

export default PricingPage;