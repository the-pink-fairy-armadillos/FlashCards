import React from 'react';
import landingPageImage from './animation.png';

const LandingPage = () => {
  return (
    <>
      this is the landing page
      <a href={`http://localhost:8080/auth/google`}>log in</a>
      <img src={landingPageImage} />
    </>
  );
};

export default LandingPage;
