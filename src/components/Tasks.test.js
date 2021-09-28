import { render, screen } from '@testing-library/react';
import Tasks from './Tasks';

test('renders Tasks link', () => {
  render(<Tasks />);
  const linkElement = screen.getByText(/Tasks/);
  expect(linkElement).toBeInTheDocument();
});
