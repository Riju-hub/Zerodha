import React, {useEffect} from 'react';
import Hero from './Hero';
import CreateTicket from './CreateTicket';

function SupportPage() {
    useEffect(() => {
        document.title = "Zerodha Support Portal: Find answers to all your queries";
      }, []);
    return ( 
        <>
            <Hero/>
            <CreateTicket/>
        </>
     );
}

export default SupportPage;