import { fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render } from './test-utils';

import App from '../App';

const initialState = {
  schedule: {
    totalSessions: 6,
    sessions: [
      { id: 1, time: '10:00', saledSeats: [11, 12, 13, 14, 15, 16, 17, 18] },
    ],
    seats: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
    ],
    sessionSeats: [11, 12, 13, 14, 15, 16, 17, 18],
  },
};

describe('test renders modal window', () => {
  it('test renders modal window on screen', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/modal/1']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );

    const title = getByRole('dialog', { name: 'Cinema Hall' });
    expect(title).toBeInTheDocument();
  });

  it('test disables seats on cinema hall', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/modal/1']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );

    const button = getByRole('button', { name: '11' });
    expect(button).toBeDisabled();
  });

  it('test enables seats on cinema hall', () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={['/modal/1']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );

    const button = getByRole('button', { name: '1' });
    expect(button).toBeEnabled();
  });

  it('test renders ticket in ticket list', () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter initialEntries={['/modal/1']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );

    act(() => {
      const button = getByRole('button', { name: '1' });
      fireEvent.click(button);
    });

    const ticket = getByTestId(1);
    expect(ticket).toBeInTheDocument();
  });

  it('test renders modal windows after close', () => {
    const { getByRole, getByText } = render(
      <MemoryRouter initialEntries={['/modal/1']}>
        <App />
      </MemoryRouter>,
      { initialState }
    );
    const modalHeader = getByText(/cinema hall/i);

    act(() => {
      const button = getByRole('button', { name: 'Buy Tickets' });
      fireEvent.click(button);
    });

    expect(modalHeader).not.toBeInTheDocument();
  });
});
