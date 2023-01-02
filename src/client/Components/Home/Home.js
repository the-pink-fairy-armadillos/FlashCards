import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { v4 as uuid } from 'uuid';
import styles from './home.module.css';

const Home = () => {
  const [arrCards, setArrCards] = useState([]);

  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/api/cards',
    }).then((res) => {
      setArrCards(res.data);
    });
  }, []);

  return (
    <>
      <div id={styles.createNewCard}>
        Create New Card <strong>+</strong>
      </div>
      <div id={styles.cardsContainer}>
        {arrCards.map((card) => (
          <Card data={card} key={uuid()} />
        ))}
      </div>
    </>
  );
};

export default Home;
