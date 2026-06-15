import React, {useEffect} from 'react';
import Hero from "./Hero";
import OpenAccount from '../OpenAccount';
import Investment from './Investment';
import StepDemat from './StepDemat';
import Benefit from './Benefit';
import Faqs from './Faqs';
import Account from './Account';

function Signup() {
  useEffect(() => {
    document.title = "Open a free demat and trading account online at Zerodha";
  }, []);
  return (
    <>
      <Hero />
      <Account />
      <Investment />
      <StepDemat />
      <Benefit />
      <Faqs />
      <OpenAccount />
    </>
  );
}

export default Signup;