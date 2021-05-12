const actions = {
	GET_SCHEDULE_REQUEST: 'GET_SCHEDULE_REQUEST',
	GET_SCHEDULE_REQUEST_ERROR: ' GET_SCHEDULE_REQUEST_ERROR',
	GET_SCHEDULE_REQUEST_SUCCESS: ' GET_SCHEDULE_REQUEST_SUCCESS', // action creator - functions that exist to return a plain objects
	getSchedule: () => ({type: actions.GET_SCHEDULE_REQUEST})
};

export default actions;
