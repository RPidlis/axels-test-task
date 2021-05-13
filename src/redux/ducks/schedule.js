import { takeEvery, put, all, fork } from 'redux-saga/effects';

import { scheduleApi } from '../../API/schedule-api';

const actions = {
  GET_SCHEDULE_REQUEST: 'GET_SCHEDULE_REQUEST',
  GET_SCHEDULE_REQUEST_ERROR: ' GET_SCHEDULE_REQUEST_ERROR',
  GET_SCHEDULE_REQUEST_SUCCESS: ' GET_SCHEDULE_REQUEST_SUCCESS'
};

const initState = {
  schedule: []
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
        actions: action.payload
      };
    default:
      return state;
  }
};

//=====Action Creators
const getSchedule = () => ({ type: actions.GET_SCHEDULE_REQUEST });

//===== Sagas side effects
export function* setSchedule() {
  yield takeEvery(actions.GET_SCHEDULE_REQUEST, function* () {
    try {
      let response = yield scheduleApi.get();
      console.log(response);
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
}

// Error handling
export function* getScheduleError() {
  yield takeEvery(actions.GET_SCHEDULE_REQUEST_ERROR, () =>
    console.log('error')
  );
}

export default function* ScheduleSaga() {
  yield all([fork(setSchedule)]);
}
export { scheduleReducer, getSchedule };
