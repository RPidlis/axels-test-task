import axios, { AxiosResponse } from 'axios';

import { InitialStateType } from '../redux/ducks/schedule';

const instance = axios.create({
  baseURL: 'http://demo5400503.mockable.io/',
});

export const scheduleApi = {
  path: 'schedule',
  get: () =>
    instance
      .get<AxiosResponse<InitialStateType>>('schedule')
      .then((response) => response.data),
};
