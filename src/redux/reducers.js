import scheduleReducer from './schedule/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    schedule: scheduleReducer
})

export default rootReducer
