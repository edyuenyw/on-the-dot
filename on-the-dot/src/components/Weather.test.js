import { render, screen } from '@testing-library/react';
import Weather from './Weather';

test('renders Weather link', () => {
  render(<Weather />);
  const linkElement = screen.getByText(/Weather/);
  expect(linkElement).toBeInTheDocument();
});
