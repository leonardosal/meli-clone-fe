import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Container, Panel } from '../../components/Wrappers';

import { LoaderDetail } from '../../components/Loader';

import './itemDetails.scss';

export default class ItemDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
      loading: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    this.setState({
      loading: true,
    });
    const resp = await fetch(`${process.env.API_URL}/items/${match.params.id}`);
    const respJson = await resp.json();

    this.setState({
      item: respJson.item,
      loading: false,
    });
  }

  formatPrice = ({ amount, decimals, currency }) => {
    return (amount + decimals).toLocaleString('es', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency,
    });
  };

  formatText = (condition, soldQuantity) => {
    const quantity = soldQuantity ? `- ${soldQuantity} vendidos` : '';
    return `${condition} ${quantity} `;
  };

  render() {
    const { item, loading } = this.state;
    return (
      <Container>
        <Panel>
          {loading ? (
            <LoaderDetail />
          ) : (
            <>
              <div className="content">
                <img
                  className="product-image"
                  src={item.picture}
                  alt="imagem do produto"
                />
                <div className="buy-info-container">
                  <h5 className="sold-quantity">
                    {this.formatText(item.condition, item.sold_quantity)}
                  </h5>
                  <h3 className="title">{item.title}</h3>
                  <h2 className="price">
                    {item.price && this.formatPrice(item.price)}
                  </h2>
                  <button className="button" type="button">
                    Comprar
                  </button>
                </div>
              </div>
              <div className="description-container">
                <h2 className="description-title">Descripción del producto</h2>
                <p className="description">{item.description}</p>
              </div>
            </>
          )}
        </Panel>
      </Container>
    );
  }
}

ItemDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ItemDetails.defaultProps = {
  match: {
    params: {
      id: '',
    },
  },
};
