import React from 'react';

import './header.scss';

const Header = ({ query, onChange, onSubmit }) => (
  <header className="header">
    <div className="header-box">
      <img
        className="logo"
        src="https://http2.mlstatic.com/ui/navigation/4.5.2/mercadolibre/logo__large_plus@2x.png"
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
