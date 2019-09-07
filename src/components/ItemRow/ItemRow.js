import React from 'react';

import './ItemRow.scss';

import PropTypes from 'prop-types';

const ItemRow = ({ price, title, picture, freeShipping }) => (
  <div className="row">
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
    <h5 className="location">São Paulo</h5>
  </div>
);

ItemRow.propTypes = {
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
