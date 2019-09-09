import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';

import ItemRow from '../../components/ItemRow';
import { LoaderList } from '../../components/Loader';

import { Container, Panel } from '../../components/Wrappers';

class ItemsSearch extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onSubmit, location } = this.props;
    const param = qs.parse(location.search);
    if (param['?search']) {
      onSubmit(param['?search']);
    }
  }

  render() {
    const { loading, items } = this.props;
    return (
      <Container>
        <Panel>
          {!loading ? (
            items.map(item => (
              <ItemRow
                key={item.id}
                id={item.id}
                title={item.title}
                picture={item.picture}
                price={item.price}
                freeShipping={item.free_shipping}
              />
            ))
          ) : (
            <LoaderList />
          )}
        </Panel>
      </Container>
    );
  }
}

ItemsSearch.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      picture: PropTypes.string,
      price: PropTypes.shape({
        amount: PropTypes.number,
        currency: PropTypes.string,
        decimals: PropTypes.number,
        free_shipping: PropTypes.bool,
      }),
    })
  ),
};

ItemsSearch.defaultProps = {
  loading: true,
  items: [],
};

export default ItemsSearch;
