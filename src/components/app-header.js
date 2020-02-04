import React from 'react';
import './app-header.css';

const AppHeader = ({more, done}) => {
  return (
    <header className="header">
      <h1 className="header__title">ToDo List</h1>
      <p className="header__text">{more} more to do, {done} done</p>
    </header>
  );
};

export default AppHeader;