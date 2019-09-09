import React, { Component } from 'react';

import Routes from './Routes';

import './styles/global.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      categories: [],
      items: [],
      loading: false,
    };
  }

  onChange = query => {
    this.setState({
      query,
    });
  };

  onSubmit = async query => {
    this.setState({
      loading: true,
    });

    const resp = await fetch(
      `https://challenge-meli.herokuapp.com/items?q=${query}`
    );
    const respJson = await resp.json();

    this.setState({
      items: respJson.items,
      categories: respJson.categories,
      loading: false,
    });
  };

  render() {
    const { items, categories, loading, query } = this.state;
    return (
      <Routes
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        query={query}
        categories={categories}
        loading={loading}
        items={items}
      />
    );
  }
}

export default App;
