import { all } from 'redux-saga/effects';

import ScheduleSaga from './ducks/schedule';

export default function* rootSaga() {
  yield all([ScheduleSaga()]);
}
