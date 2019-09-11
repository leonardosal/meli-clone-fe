import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Searchbar from '../../src/components/Searchbar';

describe('SearchBar component Test', () => {
  it('should render element with correct values received from props', () => {
    const props = {
      query: 'Iphone',
      onChange: () => {},
      onSubmit: () => {},
    };
    const { getByTestId } = render(
      <MemoryRouter>
        <Searchbar
          query={props.query}
          onChange={props.onChange}
          onSubmit={props.onSubmit}
        />
      </MemoryRouter>
    );
    expect(getByTestId('search-input')).toHaveValue('Iphone');
  });
});
