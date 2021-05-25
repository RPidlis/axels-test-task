import { render } from '@testing-library/react';

import CinemaHallComponent, {
  PropsType,
} from '../components/CinemaHallComponent';

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

describe('test renders Cinema Hall', () => {
  it('test renders snapshot ', () => {
    const component = renderCinemaHallComponent();
    expect(component).toMatchSnapshot();
  });
  it('test disables session seats', () => {
    const { getByText } = renderCinemaHallComponent();
    const button = getByText(1);
    expect(button).toBeDisabled();
  });

  it('test enables session seats', () => {
    const { getByText } = renderCinemaHallComponent();
    const button = getByText(6);
    expect(button).toBeEnabled();
  });

  it('test renders seats on cinema hall', () => {
    const { queryAllByRole } = renderCinemaHallComponent();
    const buttons = queryAllByRole('button');
    expect(buttons.length).toBe(6);
  });
});
