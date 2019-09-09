import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Breadcrumbs from './components/Breadcrumbs';

import ItemSearch from './containers/ItemsSearch';

import ItemDetails from './containers/ItemDetails';

import Header from './components/Header';

const NotFound = () => <div>404 Não encontrada</div>;

const Routes = ({ categories, loading, items, query, onChange, onSubmit }) => (
  <BrowserRouter>
    <>
      <Header query={query} onChange={onChange} onSubmit={onSubmit} />
      <Breadcrumbs categories={categories} />
      <Switch>
        <Route exact path="/" component={() => <div></div>} />
        <Route
          exact
          path="/items"
          render={props => (
            <ItemSearch
              {...props}
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

export default Routes;
