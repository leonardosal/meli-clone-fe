import React, { Component } from 'react';

import Header from '../../components/Header';

import './panel.scss';

export default class ItemsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: {
        author: {},
        categories: [],
        items: [],
      },
    };
  }

  componentDidMount = () => {};

  onChange = query => {
    this.setState({
      query,
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const { query } = this.state;
    const resp = await fetch(
      `https://challenge-meli.herokuapp.com/items?q=${query}`
    );
    const respJson = await resp.json();

    this.setState({
      items: respJson,
    });
  };

  render() {
    const { query, items } = this.state;
    return (
      <>
        <Header
          query={query}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        />
        <div className="nav">
          <ul>
            <li>telefone - </li>
          </ul>
        </div>
        <main className="container">
          {items.items.map(item => (
            <span key={item.id}>
              {item.title} <br />
            </span>
          ))}
        </main>
      </>
    );
  }
}
