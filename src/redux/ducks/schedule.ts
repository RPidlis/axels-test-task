import { takeEvery, put, all } from 'redux-saga/effects';

import { scheduleApi } from '../../API/schedule-api';

export type sessionType = {
  id: number | null;
  time: string | null;
  saledSeats: Array<number>;
};

export type seatType = {
  id: number;
};

const initialState = {
  totalSessions: null as number | null,
  sessions: [
    {
      id: null as number | null,
      time: null as string | null,
      saledSeats: null as Array<number> | null,
    },
  ] as Array<sessionType>,
  seats: null as Array<seatType> | null,
  sessionSeats: null as Array<number> | null,
};

//======= Get action type for reducer
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsType<
  T extends { [key: string]: (...arg: any[]) => any }
> = ReturnType<PropertiesType<T>>;
type ActionType = InferActionsType<typeof actions>;

export type initialStateType = typeof initialState;

const scheduleReducer = (
  state = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case 'GET_SCHEDULE_REQUEST':
      return {
        ...state,
      };
    case 'GET_SCHEDULE_REQUEST_SUCCESS':
      return {
        ...state,
        sessions: action.payload.sessions,
        seats: action.payload.seats,
      };
    case 'SET_SALED_SEATS':
      return {
        ...state,
        sessionSeats:
          state.sessions.find(
            (session: sessionType) => session.id === action.id
          )?.saledSeats || null,
      };
    case 'SET_PURCHASE_SEATS':
      return {
        ...state,
        sessions: state.sessions?.map((session: sessionType) => {
          if (session.id === action.payload.id) {
            return {
              ...session,
              saledSeats: [...session.saledSeats, ...action.payload.seats],
            };
          } else {
            return session;
          }
        }),
      };
    default:
      return state;
  }
};
//===== Action Types
type getSessionIdType = {
  type: 'GET_SESSION_ID';
  id: number;
};
type PurchaseSeatsType = {
  type: 'LOAD_PURCHASE_SEATS';
  payload: { id: number; seats: Array<number> };
};

export const actions = {
  getSchedule: () => ({ type: 'GET_SCHEDULE_REQUEST' } as const),
  getSessionId: (id: number) => ({ type: 'GET_SESSION_ID', id } as const),
  getPurchaseSeats: (payload: Array<number>) =>
    ({
      type: 'LOAD_PURCHASE_SEATS',
      payload,
    } as const),
  setSchedule: (payload: initialStateType) =>
    ({
      type: 'GET_SCHEDULE_REQUEST_SUCCESS',
      payload,
    } as const),
  setScheduleError: () =>
    ({
      type: 'GET_SCHEDULE_REQUEST_ERROR',
    } as const),
  setSaledSeats: (id: number) =>
    ({
      type: 'SET_SALED_SEATS',
      id,
    } as const),
  setPurchaseSeats: (payload: { id: number; seats: Array<number> }) =>
    ({
      type: 'SET_PURCHASE_SEATS',
      payload,
    } as const),
};

//===== Sagas side effects
export function* setScheduleWatcher(): Generator {
  yield takeEvery('GET_SCHEDULE_REQUEST', function* () {
    try {
      let response: initialStateType = yield scheduleApi.get();
      yield put(actions.setSchedule(response));
    } catch (error) {
      yield put(actions.setScheduleError());
    }
  });
}

function* setSessionSeatWatcher(): Generator {
  yield takeEvery('GET_SESSION_ID', setSaledSeatsWorker);
}

function* setSaledSeatsWorker(action: getSessionIdType): Generator {
  console.log(action);
  yield put(actions.setSaledSeats(action.id));
}

function* loadSoldTicketsWatcher(): Generator {
  yield takeEvery('LOAD_PURCHASE_SEATS', setPurchaseSeatsWorker);
}

function* setPurchaseSeatsWorker(action: PurchaseSeatsType): Generator {
  yield put(actions.setPurchaseSeats(action.payload));
}

// Error handling
export function* getScheduleError(): Generator {
  yield takeEvery('GET_SCHEDULE_REQUEST_ERROR', () => console.log('error'));
}

function* rootSaga(): Generator {
  yield all([
    setScheduleWatcher(),
    setSessionSeatWatcher(),
    loadSoldTicketsWatcher(),
  ]);
}

export { rootSaga, scheduleReducer };

export const { getSessionId, getPurchaseSeats, getSchedule } = actions;
