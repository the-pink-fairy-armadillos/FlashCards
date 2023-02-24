import React from 'react';
import styles from './home.module.css';

export default function FilterPlus({openCreateFilter}) {
    return (
        <button className="add-filter btn-inverse btn-small btn" onClick={() => openCreateFilter(true)}>+</button>
    )
}