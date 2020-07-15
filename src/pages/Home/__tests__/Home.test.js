import React from 'react';
import { render } from '@testing-library/react';
import { Home } from 'pages';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText('React Docs');
  expect(linkElement).toBeInTheDocument();
});
