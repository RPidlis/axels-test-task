import actions from './actions'
import { takeEvery, put, all, fork } from 'redux-saga/effects';
import { scheduleApi } from '../../API/schedule-api'
export function* getSchedule() {
    yield takeEvery(actions.GET_SCHEDULE_REQUEST, function* () {
        try {
            let response = yield scheduleApi.get();
            yield put({
                type: actions.GET_SCHEDULE_REQUEST_SUCCESS,
                schedule: response
            })
        } catch (error) {
            yield put({
                type: actions.GET_SCHEDULE_REQUEST_ERROR,
            })
        }
    })
}
// Error handling
export function* getScheduleError() {
    yield takeEvery(actions.GET_SCHEDULE_REQUEST_ERROR,
        function () { console.log("error") })
}
export default function* rootSaga() {
    yield all([
        fork(getSchedule)
    ])
}
