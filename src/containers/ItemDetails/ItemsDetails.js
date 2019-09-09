import React, { PureComponent } from 'react';

import { Container, Panel } from '../../components/Wrappers';

export default class ItemDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  async componentDidMount() {
    /* const resp = await fetch(
      `https://challenge-meli.herokuapp.com/items/${this.props.match.params.id}`
    );
    const respJson = await resp.json();

    this.setState({
      item: respJson,
    });*/
  }

  render() {
    return (
      <Container>
        <Panel>
          <img className="" src="" alt="imagem do produto" />
        </Panel>
      </Container>
    );
  }
}
