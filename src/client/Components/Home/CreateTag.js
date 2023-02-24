import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styles from '../CreateCard/CreateCard.module.css';

export default function CreateTag({ isOpen, setIsOpen, tags, setTags }) {
  const [tagName, setTagName] = useState('');

  const saveTag = () => {
    fetch('http://localhost:8080/api/tags', {
      method: 'POST',
      body: JSON.stringify({ user_id: 6, tag_name: tagName }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(() => {
      tags.push({tag_name: tagName});
      setTags(tags);
    }
    )
  };

  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div className="card-modal" onClick={() => setIsOpen(false)} />
      <div className="card-form">
        <input
          onChange={(e) => setTagName(e.target.value)}
          placeholder="Enter Tag Name Here"
        ></input>
        <button className="btn btn-wide btn-create-card" onClick={saveTag}>
          Add Tag
        </button>
      </div>
    </>,
    document.getElementById('portal')
  );
}
