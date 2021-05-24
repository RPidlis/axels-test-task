import { render } from '@testing-library/react';

import CinemaHallComponent, { PropsType } from './CinemaHallComponent';

function renderCinemaHallComponent(props: Partial<PropsType> = {}) {
  const defaultProps: PropsType = {
    sessionSeats: [1, 3, 2, 4, 5],
    seats: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
    chosenSeats: [],
    onSeatClick() {
      return;
    },
  };
  return render(<CinemaHallComponent {...defaultProps} {...props} />);
}

test('session button 1 to be disabled', () => {
  const { getByText } = renderCinemaHallComponent();
  const button = getByText(1);
  expect(button).toBeDisabled();
});

test('session button 6 should be enable', () => {
  const { getByText} = renderCinemaHallComponent();

  const button = getByText(6);
  expect(button).toBeEnabled();


});

test('in cinema hall should be 6 seats', () => {
  const { queryAllByRole } = renderCinemaHallComponent();

  const buttons = queryAllByRole('button')
  expect(buttons.length).toBe(6)
});
