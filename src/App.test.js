import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders main link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vacha There!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders main link 2 time', () => {
  render(<App />);
  const linkElement = screen.getByText(/Vacha There!/i);
  expect(linkElement).toBeInTheDocument();
});