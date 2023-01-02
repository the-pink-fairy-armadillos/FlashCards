import React from 'react';
import landingPageImage from './animation.png';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
      <div className="container d-flex justify-content-center text-center ">
        <div className="row">
          <div id={styles.divContainer} className="col">
            <div className={styles.width500}>
              "Learning is the key to unlocking your full potential and
              achieving greatness."
            </div>
            <div>
              <img id={styles.landingImage} src={landingPageImage} />
            </div>
          </div>
          <a
            className="col"
            id={styles.LandingPageLogin}
            href={`http://localhost:8080/auth/google`}
          >
            log in
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
