import React, {useEffect} from 'react';
import Hero from './Hero';
import Team from './Team';


function AboutPage() {
    useEffect(() => {
        document.title = "Our company, history, and the people behind it";
      }, []);
    return ( 
        <>
            <Hero/>
            <Team/>
        </>
     );
}

export default AboutPage;