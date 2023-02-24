import styles from './CreateCard.module.css';
// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDom from 'react-dom';
import TagsDisplay from './TagsDisplay';

const CreateCard = ({isOpen, setIsOpen, tags, cards, setCards}) => {
  const cardTemplate = {user_id: 6, title:'', card_front:'', card_back:'', correct_count: 0, incorrect_count: 0};
  const [card, setCard] = useState(cardTemplate);
  const navigate = useNavigate();

  function cb() {
    fetch('http://localhost:8080/api/cards', {
      method: 'POST',
      //TODO: user_id
      body: JSON.stringify(card),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(() =>{
      cards.push(card);
      setCards(cards);
    })
  }
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <>
      <div className="card-modal" onClick={() => setIsOpen(false)} />
      <div className="card-form">
        <input
          className="card-title"
          onChange={(e) => setCard({...card, title: e.target.value})}
          placeholder='Enter Card Title Here'
        ></input>
        <input
          onChange={(e) => setCard({...card, card_front: e.target.value})}
          placeholder='Enter Question Here'
        ></input>
        <input
          onChange={(e) => setCard({...card, card_back: e.target.value})}
          placeholder='Enter Answer Here'
        ></input>
        <TagsDisplay tags={tags}/>
        <button className="btn btn-wide btn-create-card" onClick={cb}>
          Add Card <span>&#43;</span>
        </button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default CreateCard;
