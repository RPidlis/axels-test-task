import { actions, InitialStateType, scheduleReducer } from './schedule';

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

test('length of session should be increment', () => {
  // 1. test data
  let action = actions.setSchedule(mockedRequest);

  // 2. action
  let newState = scheduleReducer(state, action);

  // 3.expectation
  expect(newState.sessions.length).toBe(3);
});

it('saled seats should be increment for session with id 1', () => {
  //1. test data
  let action = actions.setPurchaseSeats({ id: 1, seats: [1, 2, 3, 4] });

  //2. action
  let newState = scheduleReducer(state, action);

  //    3.expectation
  expect(newState.sessions[0].saledSeats.length).toBe(12);
});

it('set saled seats for cinema hall with session id 1', () => {
  //1. test data
  let action = actions.setSaledSeats(1);

  //2. action
  let newState = scheduleReducer(state, action);

  //    3.expectation
  expect(newState.sessionSeats?.length).toBe(
    state.sessions[0].saledSeats.length
  );
});
