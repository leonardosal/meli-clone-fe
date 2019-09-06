import React from 'react';

import './header.scss';

const Header = ({ query, onChange, onSubmit }) => (
  <header className="header">
    <div className="box">
      <img
        className="logo"
        src="https://meli-challenge.s3.amazonaws.com/Logo_ML%402x.png"
        alt="logo"
      />
      <form onSubmit={onSubmit}>
        <input
          className="search-input"
          value={query}
          onChange={e => onChange(e.target.value)}
        />
      </form>
    </div>
  </header>
);

export default Header;
