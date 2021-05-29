import { takeEvery, put, all } from 'redux-saga/effects';

import { scheduleApi } from '../../API/schedule-api';

export type SessionType = {
  id: number;
  time: string;
  saledSeats: Array<number>;
};

export type SeatType = {
  id: number;
};

const initialState = {
  totalSessions: null as number | null,
  sessions: [
    {
      id: 1 as number,
      time: '10:00' as string,
      saledSeats: [1,2,3] as Array<number>,
    },
  ] as Array<SessionType>,
  seats: null as Array<SeatType> | null,
  sessionSeats: null as Array<number> | null,
  scheduleError: false
};

export type InitialStateType = typeof initialState;

//======= Get action type for reducer
type PropertiesType<Type> = Type extends { [key: string]: infer CustomType }
  ? CustomType
  : never;
type InferActionsType<Type extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<Type>>;
type ActionType = InferActionsType<typeof actions>;

const scheduleReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case 'GET_SCHEDULE_REQUEST':
      return {
        ...state,
      };
    case 'GET_SCHEDULE_REQUEST_ERROR':
      return {
        ...state,
        scheduleError: true
      };
    case 'GET_SCHEDULE_REQUEST_SUCCESS':
      return {
        ...state,
        sessions: action.payload.sessions,
        seats: action.payload.seats,
        scheduleError: false
      };
    case 'SET_SALED_SEATS':
      return {
        ...state,
        sessionSeats:
          state.sessions.find(
            (session: SessionType) => session.id === action.id
          )?.saledSeats || null,
      };
    case 'SET_PURCHASE_SEATS':
      return {
        ...state,
        sessions: state.sessions?.map((session: SessionType) => {
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
type GetSessionIdType = {
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
  getPurchaseSeats: (payload:{ id: number; seats: Array<number> }) =>
    ({
      type: 'LOAD_PURCHASE_SEATS',
      payload,
    } as const),
  setSchedule: (payload: InitialStateType) =>
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
  yield takeEvery('GET_SCHEDULE_REQUEST', setScheduleWorker);
}

export function* setScheduleWorker () {
  try {
    let response: InitialStateType = yield scheduleApi.get();
    yield put(actions.setSchedule(response));
  } catch (error) {
    yield put(actions.setScheduleError());
  }
}

function* sessionIdWatcher(): Generator {
  yield takeEvery('GET_SESSION_ID', saledSeatsWorker);
}

function* saledSeatsWorker(action: GetSessionIdType): Generator {
  yield put(actions.setSaledSeats(action.id));
}

function* ticketsWatcher(): Generator {
  yield takeEvery('LOAD_PURCHASE_SEATS', purchaseSeatsWorker);
}

function* purchaseSeatsWorker(action: PurchaseSeatsType): Generator {
  yield put(actions.setPurchaseSeats(action.payload));
}

// Error handling
export function* getScheduleError(): Generator {
  yield takeEvery('GET_SCHEDULE_REQUEST_ERROR', () => console.log('error'));
}

function* rootSaga(): Generator {
  yield all([
    setScheduleWatcher(),
    sessionIdWatcher(),
    ticketsWatcher(),
  ]);
}

export { rootSaga, scheduleReducer };

export const { getSessionId, getPurchaseSeats, getSchedule } = actions;
