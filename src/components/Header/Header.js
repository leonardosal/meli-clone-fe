import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

import Searchbar from '../Searchbar';

const Header = ({ query, onChange, onSubmit }) => (
  <header className="header">
    <div className="box">
      <img
        className="logo"
        src="https://meli-challenge.s3.amazonaws.com/Logo_ML%402x.png"
        alt="logo"
      />
      <Searchbar query={query} onChange={onChange} onSubmit={onSubmit} />
    </div>
  </header>
);

Header.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Header.defaultProps = {
  query: '',
};

export default Header;
