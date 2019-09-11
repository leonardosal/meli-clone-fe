import React from 'react';
import { Link } from 'react-router-dom';

import './ItemRow.scss';

import PropTypes from 'prop-types';

const formatPrice = ({ amount, decimals, currency }) => {
  return (amount + decimals).toLocaleString('es', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency,
  });
};

const ItemRow = ({ id, price, title, picture, freeShipping }) => (
  <Link className="row" to={`/items/${id}`}>
    <div className="content-box">
      <img className="picture" src={picture} alt="foto do produto" />
      <div className="title-container">
        <div className="title">
          <h2 className="price" data-testid="price">
            {formatPrice(price)}
          </h2>

          {freeShipping && (
            <img
              data-testid="freeShippingImg"
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
