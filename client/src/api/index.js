import { restRequest, setToken } from 'plugins/request';
import { getLocalStorage } from 'plugins/localForage';

// Constants
export const PROFILE_QUERY_KEY = 'users';
export const ORDERS_USER_QUERY_KEY = 'orders/user/myorders';
export const USER_PROFILE_QUERY_KEY = 'users';
export const KUBBAS_QUERY_KEY = 'kubbas';
const { getItem } = getLocalStorage();

const profile = restRequest(PROFILE_QUERY_KEY);
const editProfile = restRequest(USER_PROFILE_QUERY_KEY);
const kubbas = restRequest(KUBBAS_QUERY_KEY);
const ordersUser = restRequest(ORDERS_USER_QUERY_KEY);

export const apiUserProfile = async ({ queryKey: [, params = {}] }) => {
  const token = await getItem('token');
  setToken(token);
  const response = await profile.get('profile', true, {});
  const { accessToken } = response;
  if (!accessToken) {
    response.accessToken = token;
  }

  return response;
};

export const apiOrdersUser = async (params = {}) => {
  const token = await getItem('token');

  setToken(token);
  const { queryKey } = params;
  const response = ordersUser.get('', true, queryKey[1]);
  const { accessToken } = response;
  if (!accessToken) {
    response.accessToken = token;
  }

  return response;
};

export const apiGetKubbas = async ({ queryKey: [, params = {}] }) => {
  const token = await getItem('token');
  setToken(token);
  const response = await kubbas.get('', true, {});
  const { accessToken } = response;
  if (!accessToken) {
    response.accessToken = token;
  }

  return response;
};

export const apiEditUserProfile = params => {
  return editProfile.patch('', true, params);
};
