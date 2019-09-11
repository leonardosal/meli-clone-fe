import React from 'react';
import { render } from '@testing-library/react';

import Breadcrumbs from '../../src/components/Breadcrumbs';

describe('Breadcrumbs component Test', () => {
  it('should render element with correct text', () => {
    const categories = ['telefonia', 'smartphone'];
    const { getByText, getByTestId } = render(
      <Breadcrumbs categories={categories} />
    );
    expect(getByTestId('categories-list')).toContainElement(
      getByText('smartphone')
    );
    expect(getByTestId('categories-list')).toContainElement(
      getByText('telefonia')
    );
  });

  it('should render empty element when receive a empty array of categories', () => {
    const categories = [];
    const { getByTestId } = render(<Breadcrumbs categories={categories} />);
    expect(getByTestId('categories-list')).toBeEmpty();
  });
});
