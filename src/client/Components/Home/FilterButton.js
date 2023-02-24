import React from 'react';
import styles from './home.module.css';

export default function FilterButton({ index, filterStates, setFilterStates, name }) {
  const changeState = () => {
    const newState = [...filterStates];
    newState[index] = !newState[index];
    setFilterStates(newState);
  };

  return (
    <button
      className={
        filterStates[index] ? "btn filter-btn filter-active" : "btn filter-btn"
      }
      onClick={changeState}
    >{name}</button>
  );
}
