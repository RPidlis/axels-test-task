import { takeEvery, put, all } from 'redux-saga/effects';

import { scheduleApi } from '../../API/schedule-api';

const actions = {
  GET_SCHEDULE_REQUEST: 'GET_SCHEDULE_REQUEST',
  GET_SCHEDULE_REQUEST_ERROR: ' GET_SCHEDULE_REQUEST_ERROR',
  GET_SCHEDULE_REQUEST_SUCCESS: ' GET_SCHEDULE_REQUEST_SUCCESS',
  GET_SESSION_ID: ' GET_SESSION_ID',
  SET_SALED_SEATS: ' SET_SALED_SEATS',
};

const initState = {
  sessions: [],
  seats: [],
  sessionSeats: [],
};



const scheduleReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.GET_SCHEDULE_REQUEST:
      return {
        ...state
      };
    case actions.GET_SCHEDULE_REQUEST_SUCCESS:
      return {
        ...state,
        sessions: action.payload.sessions,
        seats: action.payload.seats
      };
    case actions.GET_SESSION_ID:
      return {
        ...state,
      };
    case actions.SET_SALED_SEATS:
      return {
        ...state,
        sessionSeats:  state.sessions.find((session)=> session.id === action.id).saledSeats
      };
    default:
      return state;
  }
};

//=====Action Creators
const getSchedule = () => ({ type: actions.GET_SCHEDULE_REQUEST });
const getSessionId = (id) => ({ type: actions.GET_SESSION_ID, id });

//===== Sagas side effects

function* setSessionSeat() {
  yield takeEvery(actions.GET_SESSION_ID, setSaledSeats);
};

function* setSaledSeats(action) {
  yield put({
    type: actions.SET_SALED_SEATS,
    id: action.id
  });
};

export function* setSchedule() {
  yield takeEvery(actions.GET_SCHEDULE_REQUEST, function* () {
    try {
      let response = yield scheduleApi.get();
      yield put({
        type: actions.GET_SCHEDULE_REQUEST_SUCCESS,
        payload: response
      });
    } catch (error) {
      yield put({
        type: actions.GET_SCHEDULE_REQUEST_ERROR
      });
    }
  });
};

// Error handling
export function* getScheduleError() {
  yield takeEvery(actions.GET_SCHEDULE_REQUEST_ERROR, () =>
    console.log('error')
  );
};

function* rootSaga() {
  yield all([setSchedule(),setSessionSeat()])
};

export { scheduleReducer, getSchedule ,getSessionId, rootSaga};
