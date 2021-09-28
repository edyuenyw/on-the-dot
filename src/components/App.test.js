import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Activities link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Activities/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Tasks link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tasks/);
  expect(linkElement).toBeInTheDocument();
});

test('renders Weather link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather/);
  expect(linkElement).toBeInTheDocument();
});


test('renders Traffic link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Traffic/);
  expect(linkElement).toBeInTheDocument();
});
