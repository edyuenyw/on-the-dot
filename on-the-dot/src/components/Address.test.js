import { render, screen } from '@testing-library/react';
import Address from './Address';

test('renders Address link', () => {
  render(<Address />);
  const linkElement = screen.getByText(/Address/);
  expect(linkElement).toBeInTheDocument();
});
