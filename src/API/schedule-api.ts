import axios from 'axios';

import { SeatType, SessionType } from '../redux/ducks/schedule';

export type scheduleType = {
  totalSessions: number | null;
  sessions: Array<SessionType>;
  seats: Array<SeatType>;
};

const instance = axios.create({
  baseURL: 'http://demo5400503.mockable.io/',
});

export const scheduleApi = {
  path: 'schedule',
  get: () =>
    instance.get<scheduleType>('schedule').then((response) => response.data),
};
