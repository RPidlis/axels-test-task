import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://demo5400503.mockable.io/'
});
export const scheduleApi = {
  path: 'schedule',
  get: () => instance.get('schedule').then((response) => response.data)
};
