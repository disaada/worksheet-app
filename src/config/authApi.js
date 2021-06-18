/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import env from './env';
import { CheckTokenExpired, SetAuthTokenRequest } from './interceptor';

const api = axios.create({
  baseURL: `${env.authApi}`,
});

api.interceptors.request.use(SetAuthTokenRequest, (err) => err);
api.interceptors.response.use((res) => res, CheckTokenExpired);

export default api