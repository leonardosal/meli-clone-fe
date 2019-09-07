import React, { Component } from 'react';

import ContentLoader from 'react-content-loader';

import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import ItemRow from '../../components/ItemRow';
import { Container, Panel } from '../../components/Wrappers';

import './Loader.scss';

const Loader = () => (
  <ContentLoader
    height={60}
    speed={1}
    primaryColor="#f0f0f0"
    secondaryColor="#e0e0e0"
  >
    <rect x="0" y="0" rx="5" ry="5" width="50" height="50" />
    <rect x="80" y="10" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="30" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
);

export default class ItemsSearch extends Component {
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

  onSubmit = async e => {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { query } = this.state;
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
    const { query, items, categories, loading } = this.state;
    return (
      <>
        <Header
          query={query}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <Container>
          <Breadcrumbs categories={categories} />
          <Panel>
            {!loading &&
              items.map(item => (
                <ItemRow
                  key={item.id}
                  title={item.title}
                  picture={item.picture}
                  price={item.price}
                  freeShipping={item.free_shipping}
                />
              ))}
            {loading && (
              <div className="loader">
                <Loader />
                <Loader />
                <Loader />
                <Loader />
              </div>
            )}
          </Panel>
        </Container>
      </>
    );
  }
}
