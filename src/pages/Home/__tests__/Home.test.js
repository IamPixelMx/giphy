import React from 'react';
import { render } from '@testing-library/react';
import { Home } from 'pages';
import { SearchInput } from 'components';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const InputElement = render(<SearchInput />);
  expect(InputElement).toBeInTheDocument();
});
