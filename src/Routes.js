import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ItemSearch from './containers/ItemsSearch';

const NotFound = () => <div>404 Não encontrada</div>;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ItemSearch} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
