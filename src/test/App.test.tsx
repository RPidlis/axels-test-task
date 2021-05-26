import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from './test-utils';

import App from '../App';

const initialState = {
  schedule: {
    totalSessions: 6,
    sessions: [
      { id: 1, time: '10:00', saledSeats: [11, 12, 13, 14, 15, 16, 17, 18] },
    ],
    seats: [{ id: 1 }, { id: 2 }],
    sessionSeats: [],
  },
};

describe('test render App', () => {
  test('test renders session button on screen', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('test renders modal window after click on session', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );
    const button = getByRole('button');

    fireEvent.click(button);
    const modalTitle = getByText('Cinema Hall');
    expect(modalTitle).toBeInTheDocument();
  });
});
