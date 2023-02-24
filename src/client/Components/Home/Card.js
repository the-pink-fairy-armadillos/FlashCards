import React from 'react';
import styles from './card.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  const { back, difficulty, card_front, hints, scheduled, title, user_id, _id } =
    data;
    const navigate = useNavigate();
  return (
    <>
      
        <Link to={`/flashcard/${_id}`} >
        <div className="card-btn large-btn">
        <div className="card-btn btn">{title ?? 'no title'}</div>
        </div>
        </Link>
    </>
  );
};

export default Card;
