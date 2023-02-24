import React from 'react';
import landingPageImage from './alinea-home.png';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
    <div className='mt-5'></div>
      <div className="container d-flex justify-content-center text-center vertical-center ">
        <div className="row align-items-center">
          <div id={styles.divContainer} className="col align-items-center">
            <div>
              <img id={styles.landingImage} src={landingPageImage} />
            </div>
          </div>
          <a
            className="align-items-center login-btn"
            id={styles.LandingPageLogin}
            href={`http://localhost:8080/auth/google`}
          >
            <span>Log in</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
