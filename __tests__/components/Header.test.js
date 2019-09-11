import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../../src/components/Header';

describe('Header component Test', () => {
  it('should render element correct', () => {
    const props = {
      query: '',
      onChange: () => {},
      onSubmit: () => {},
    };
    const { getByTestId } = render(
      <MemoryRouter>
        <Header
          query={props.query}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        />
      </MemoryRouter>
    );
    expect(getByTestId('header')).toBeVisible();
  });
});
