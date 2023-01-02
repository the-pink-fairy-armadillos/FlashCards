import React from 'react';
import styles from './card.module.css';

const Card = ({ data }) => {
  const { back, difficulty, front, hints, scheduled, title, user_id, _id } =
    data;
  return (
    <>
      <div className={`${styles.backgroundGrey}`}>
        <div className={`${styles.title}`}>{title ?? 'no title'}</div>
        <div className={`${styles.front}`}>{front ?? 'no front'}</div>
      </div>
    </>
  );
};

export default Card;
