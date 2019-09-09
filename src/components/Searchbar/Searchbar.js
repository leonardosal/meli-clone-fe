import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import './Searchbar.scss';

const Searchbar = ({ query, onChange, onSubmit, history }) => (
  <form
    className="searchbar"
    onSubmit={e => {
      e.preventDefault();
      history.push(`/items?search=${query}`);
      onSubmit(query);
    }}
  >
    <input
      className="search-input"
      value={query}
      onChange={e => onChange(e.target.value)}
    />
    <button type="submit" className="button">
      <img
        className="icon"
        src="https://meli-challenge.s3.amazonaws.com/ic_Search%402x.png"
        alt="ícone de busca"
      />
    </button>
  </form>
);

Searchbar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Searchbar.defaultProps = {
  query: '',
};

export default withRouter(Searchbar);
