import axios from 'axios';
import React, { useState } from 'react';
import styles from './flashCard.module.css';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { json, useParams } from 'react-router-dom';

const FlashCard = () => {
  const { id } = useParams(); 
  console.log(id); 
  const [cardData, setCardData] = useState({});
  const [showFront, setShowFront] = useState(false);


  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:8080/api/cards/${id}`,
    }).then((res) => {
      console.log(res.data)
      setCardData(res.data);
    });
  }, []);
  
  return (
    <>

      <div className="container d-flex justify-content-center">
        <div className="col">
          <div id="card-title-wrapper" className={`${styles.containerbox}`}>
            <h1 className={`${styles.title}`}>{cardData.title}</h1>
          </div>

          <div id="card-frontCard" onClick={() => setShowFront(!showFront)} className={`${styles.containerbox2}` }>
            <p className="title">
              {showFront ? cardData.front : cardData.back}
            </p>
         </div>

        </div>
      </div>
    </>
  );
};

export default FlashCard;
