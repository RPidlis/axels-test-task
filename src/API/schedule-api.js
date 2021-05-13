import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://demo1829214.mockable.io/'
});
export const scheduleApi = {
  path: 'schedule',
  get: () => instance.get('schedule').then((response) => response.data)
};
