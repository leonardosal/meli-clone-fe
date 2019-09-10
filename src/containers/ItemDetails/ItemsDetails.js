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
    const resp = await fetch(
      `https://challenge-meli.herokuapp.com/items/${match.params.id}`
    );
    const respJson = await resp.json();

    this.setState({
      item: respJson.item,
      loading: false,
    });
  }

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
                    {`${item.condition} `}
                    {item.sold_quantity
                      ? `- ${item.sold_quantity} vendidos`
                      : ''}
                  </h5>
                  <h3 className="title">{item.title}</h3>
                  <h2 className="price">
                    {item.price &&
                      (item.price.amount + item.price.decimals).toLocaleString(
                        'es',
                        {
                          minimumFractionDigits: 2,
                          style: 'currency',
                          currency: item.price.currency,
                        }
                      )}
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
