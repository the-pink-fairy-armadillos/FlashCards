import React from 'react';
import landingPageImage from './animation.png';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
      <div id={styles.divContainer}>
        <p>
          "Learning is the key to unlocking your full potential and achieving
          greatness."
        </p>
        <a
          id={styles.LandingPageLogin}
          href={`http://localhost:8080/auth/google`}
        >
          log in
        </a>
      </div>
      <img id={styles.landingImage} src={landingPageImage} />
    </>
  );
};

export default LandingPage;
