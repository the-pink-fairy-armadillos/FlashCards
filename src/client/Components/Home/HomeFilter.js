import React from 'react';
import styles from './home.module.css';
import FilterButton from './FilterButton.js';
import FilterPlus from './FilterPlusButton';

export default function HomeFilter({
  filters,
  filterStates,
  setFilterStates,
  openCreateFilter,
}) {
  const buttons = [];
  filters.forEach((e, index) => {
    buttons.push(
      <FilterButton
        key={`Filter${index}`}
        index={index}
        name={filters[index].tag_name}
        filterStates={filterStates}
        setFilterStates={setFilterStates}
      />
    );
  });
  buttons.push(
    <FilterPlus key={'Filter plus'} openCreateFilter={openCreateFilter} />
  );

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div>{buttons}</div>
    </div>
  );
}
