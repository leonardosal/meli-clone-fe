import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrumbs.scss';

const Breadcrumbs = ({ categories }) => (
  <nav className="nav">
    <ul className="list" data-testid="categories-list">
      {categories.map(item => (
        <li key={item} className="item">
          {item}
        </li>
      ))}
    </ul>
  </nav>
);

Breadcrumbs.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumbs.defaultProps = {
  categories: [],
};

export default Breadcrumbs;
