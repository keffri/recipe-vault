import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from '@testing-library/user-event';

test('Login form displayed on nav button click', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByTestId('nav_button'));

  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Login form displayed on landing page button click', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByTestId('landingPage_button'));

  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('Sign Up form displayed when switch span clicked', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByTestId('nav_button'));

  expect(screen.getByText('Login')).toBeInTheDocument();

  await user.click(screen.getByTestId('form_switch'));

  expect(screen.getByText('Sign-Up')).toBeInTheDocument();
});

test('Login modal closed on button click', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByTestId('nav_button'));

  expect(screen.getByText('Login')).toBeInTheDocument();

  await user.click(screen.getByTestId('button-close'));

  expect(screen.queryByText('Login')).not.toBeInTheDocument();
});

test('Sign Up modal closed on  button click', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByTestId('nav_button'));

  expect(screen.getByText('Login')).toBeInTheDocument();

  await user.click(screen.getByTestId('form_switch'));

  expect(screen.getByText('Sign-Up')).toBeInTheDocument();

  await user.click(screen.getByTestId('button-close'));

  expect(screen.queryByText('Sign-Up')).not.toBeInTheDocument();
});
