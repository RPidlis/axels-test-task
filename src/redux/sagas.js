import { all } from 'redux-saga/effects';

import { setSchedule } from './ducks/schedule';

export default function* rootSaga() {
  yield all([setSchedule()]);
}
