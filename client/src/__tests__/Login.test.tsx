import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from '@testing-library/user-event';

test('Login modal displayed on button click', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByTestId('button'));

  expect(screen.getByText('Login')).toBeInTheDocument();
});
