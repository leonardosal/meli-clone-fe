import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ItemRow from '../../src/components/ItemRow';

describe('ItemRow component Test', () => {
  it('should render element ItemRow correct', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ItemRow
          id="MLA801616914"
          price={{ amount: 19000, currency: 'ARS', decimals: 0.98 }}
          title="Iphone X"
          picture="foto"
          freeShipping
        />
      </MemoryRouter>
    );
    expect(getByTestId('freeShippingImg')).toBeVisible();
  });
});
