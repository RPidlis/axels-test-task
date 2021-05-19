import axios from 'axios';

import { seatType, sessionType } from '../redux/ducks/schedule';

export type scheduleType = {
  totalSessions: number | null;
  sessions: Array<sessionType>;
  seats: Array<seatType>;
};

const instance = axios.create({
  baseURL: 'http://demo5400503.mockable.io/',
});

export const scheduleApi = {
  path: 'schedule',
  get: () =>
    instance.get<scheduleType>('schedule').then((response) => response.data),
};
