import React from 'react';
import PropTypes from 'prop-types';

import './Wrappers.scss';

export const Container = ({ children }) => (
  <main className="container">{children}</main>
);

export const Panel = ({ children }) => (
  <section className="panel">{children}</section>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};
