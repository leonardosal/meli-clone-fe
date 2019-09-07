import React from 'react';

import './Wrappers.scss';

export const Container = ({ children }) => (
  <main className="container">{children}</main>
);

export const Panel = ({ children }) => (
  <section className="panel">{children}</section>
);
