import {
  actions,
  InitialStateType,
  scheduleReducer,
} from '../redux/ducks/schedule';

let state: InitialStateType;
beforeEach(() => {
  state = {
    totalSessions: 6,
    sessions: [
      { id: 1, time: '10:00', saledSeats: [11, 12, 13, 14, 15, 16, 17, 18] },
    ],
    seats: [{ id: 1 }, { id: 2 }],
    sessionSeats: [],
  };
});

const mockedRequest = {
  totalSessions: 6,
  sessions: [
    { id: 1, time: '10:00', saledSeats: [11, 12, 13, 14, 15, 16, 17, 18] },
    { id: 2, time: '10:00', saledSeats: [11, 12, 13, 14, 15, 16, 17, 18] },
    { id: 4, time: '10:00', saledSeats: [11, 12, 13, 14, 15, 16, 17, 18] },
  ],
  seats: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
  sessionSeats: [],
};

describe('test loads redux ', () => {
  it('test loads sessions', () => {
    const action = actions.setSchedule(mockedRequest);

    const newState = scheduleReducer(state, action);

    expect(newState.sessions.length).toBe(3);
  });

  it('test loads purchased seats for session', () => {
    const action = actions.setPurchaseSeats({ id: 1, seats: [1, 2, 3, 4] });

    const newState = scheduleReducer(state, action);

    expect(newState.sessions[0].saledSeats.length).toBe(12);
  });

  it('test loads saled seats for modal', () => {
    const action = actions.setSaledSeats(1);

    const newState = scheduleReducer(state, action);

    expect(newState.sessionSeats?.length).toBe(
      state.sessions[0].saledSeats.length
    );
  });
});
