import axios from 'axios'
import { ShowErrorToast } from './showErrorToast';
import { showSuccesToast } from './toastSecces';

const client = axios.create({ baseURL: process.env.REACT_APP_API_KEY });

export const request = async ({ url, params = {}, ...rest }) => {
  // params = { ...params, branch_id: localStorage.getItem('branch')||1};
    client.defaults.headers.common.Authorization = `Bearer ${JSON.parse(sessionStorage.token)}`;

  const onSuccess = response => {
    console.log("🚀 ~ onSuccess ~ response:", response)
    showSuccesToast(response?.data?.data)
  };

  const onError = error => {
    console.log("🚀 ~ onError ~ error:", error)
    ShowErrorToast(error?.response?.data?.data)
    return Promise.reject(error);
  };

  return client({ url, params, ...rest }).then(onSuccess).catch(onError);
};
