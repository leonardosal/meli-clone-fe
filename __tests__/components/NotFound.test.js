import React from 'react';
import { render } from '@testing-library/react';

import NotFound from '../../src/components/NotFound';

describe('NotFound component Test', () => {
  it('should render element correct', () => {
    const { getByText } = render(<NotFound />);
    expect(getByText('404 - Página não encontrada')).toBeVisible();
  });
});
