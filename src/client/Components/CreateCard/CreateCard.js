import axios from 'axios';
import React, { useState } from 'react';
import styles from './CreateCard.module.css';

const CreateCard = () => {
  return (
    <>
      <div id={styles.cardInputs}>
        <input id={styles.cardFront} placeholder='Enter Card Question'></input>
        <input id={styles.cardBack} placeholder='Enter Card Answer'></input>
      </div>
      <button id={styles.addBtn}>Add Card</button>
    </>
  );
};

export default CreateCard;
