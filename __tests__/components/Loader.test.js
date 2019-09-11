import React from 'react';
import { render } from '@testing-library/react';

import { LoaderDetail, LoaderList } from '../../src/components/Loader';

describe('Loader component Test', () => {
  it('should render element LoaderList correct', () => {
    const { getByTestId } = render(<LoaderList />);
    expect(getByTestId('LoaderList')).toBeVisible();
  });
  it('should render element LoaderDetails correct', () => {
    const { getByTestId } = render(<LoaderDetail />);
    expect(getByTestId('LoaderDetails')).toBeVisible();
  });
});
