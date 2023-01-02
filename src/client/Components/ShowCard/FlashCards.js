import axios from 'axios';
import React, { useState } from 'react';
import styles from './flashCard.module.css';

const FlashCard = () => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="col">
          <div id="card-title-wrapper" className={`${styles.containerbox}`}>
            <h1 className={`${styles.title}`}>Temp Header</h1>
          </div>

          <div id="card-frontCard" className={`${styles.containerbox2}`}>
            <p className="title">Temp Outter text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
