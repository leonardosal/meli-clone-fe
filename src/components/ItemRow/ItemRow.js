import React from 'react';
import { Link } from 'react-router-dom';

import './ItemRow.scss';

import PropTypes from 'prop-types';

const ItemRow = ({ id, price, title, picture, freeShipping }) => (
  <Link className="row" to={`/items/${id}`}>
    <div className="content-box">
      <img className="picture" src={picture} alt="foto do produto" />
      <div className="title-container">
        <div className="title">
          <h2 className="price">
            {(price.amount + price.decimals).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              style: 'currency',
              currency: price.currency,
            })}
          </h2>

          {freeShipping && (
            <img
              className="free-shipping-icon"
              src="https://meli-challenge.s3.amazonaws.com/ic_shipping%402x.png"
              alt="ícone de frete grátis"
            />
          )}
        </div>

        <h5 className="subtitle">{title}</h5>
      </div>
    </div>
    <h5 className="location">Buenos Aires</h5>
  </Link>
);

ItemRow.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  picture: PropTypes.string,
  freeShipping: PropTypes.bool,
  price: PropTypes.shape({
    currency: PropTypes.string,
    amount: PropTypes.number,
    decimals: PropTypes.number,
  }),
};

ItemRow.defaultProps = {
  id: '',
  freeShipping: false,
  title: '',
  picture: '',
  price: {
    currency: 'BRL',
    amount: 0,
    decimals: 0,
  },
};

export default ItemRow;
