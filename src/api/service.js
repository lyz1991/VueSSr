import $ from './api-server'
import { baseUrl } from 'const/const'
export const serverAjax = () => {
  return $.get(`${baseUrl}/users/github`);
};