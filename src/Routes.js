import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';

import ItemSearch from './containers/ItemsSearch';

import ItemDetails from './containers/ItemDetails';

import Header from './components/Header';
import NotFound from './components/NotFound';

const Routes = ({ categories, loading, items, query, onChange, onSubmit }) => (
  <BrowserRouter>
    <>
      <Header query={query} onChange={onChange} onSubmit={onSubmit} />
      <Breadcrumbs categories={categories} />
      <Switch>
        <Route exact path="/" component={() => <div />} />
        <Route
          exact
          path="/items"
          render={({ location }) => (
            <ItemSearch
              location={location}
              items={items}
              onSubmit={onSubmit}
              categories={categories}
              loading={loading}
            />
          )}
        />
        <Route path="/items/:id" component={ItemDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  </BrowserRouter>
);

Routes.propTypes = {
  loading: PropTypes.bool,
  query: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
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

Routes.defaultProps = {
  query: '',
  loading: true,
  items: [],
  categories: [],
};

export default Routes;
