import actions from './actions';
const initState = {
    schedule: []
}
const scheduleReducer =(state = initState, action)=> {
    switch (action.type) {
        case actions.GET_SCHEDULE_REQUEST:
            return {
                ...state
            };
        case actions.GET_SCHEDULE_REQUEST_SUCCESS:
            return {
                ...state,
                schedule: action.schedule
            };

        default:
            return state;
    }
}

export default scheduleReducer
