import axios from 'axios'
import AuthUser from '../components/AuthUser';
import { ShowErrorToast } from './showErrorToast';

const client = axios.create({ baseURL: process.env.REACT_APP_API_KEY });

export const request = async ({ url, params = {}, ...rest }) => {
  // params = { ...params, branch_id: localStorage.getItem('branch')||1};
  if(sessionStorage.token)
    client.defaults.headers.common.Authorization = `Bearer ${JSON.parse(sessionStorage.token)}`;
  
  const onSuccess = response => response;

  const onError = error => {
    return Promise.reject(error);
  };

  return client({ url, params, ...rest }).then(onSuccess).catch(onError);
};
