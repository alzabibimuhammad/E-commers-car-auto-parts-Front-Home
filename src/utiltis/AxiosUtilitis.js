import axios from 'axios'

const client = axios.create({ baseURL: process.env.REACT_APP_API_KEY });

export const request = async ({ url, params = {}, ...rest }) => {
  // params = { ...params, branch_id: localStorage.getItem('branch')||1};

  client.defaults.headers.common.Authorization = `Bearer ${sessionStorage.token}`;

  const onSuccess = response => response;

  const onError = error => {

    return Promise.reject(error);
  };

  return client({ url, params, ...rest }).then(onSuccess).catch(onError);
};
