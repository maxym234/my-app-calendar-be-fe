import { useQuery } from 'react-query';
import {
  PROFILE_QUERY_KEY,
  ORDERS_USER_QUERY_KEY,
  apiOrdersUser,
  KUBBAS_QUERY_KEY,
  apiUserProfile,
  apiGetKubbas,
} from './index';

// EXPORT HOOKS
export const useGetUserProfile = params =>
  useQuery([`${PROFILE_QUERY_KEY}`, params], apiUserProfile);

export const useGetKubbas = params =>
  useQuery([`${KUBBAS_QUERY_KEY}`, params], apiGetKubbas);

export const useGetOrdersForChef = params =>
  useQuery([`${ORDERS_USER_QUERY_KEY}`, params], apiOrdersUser);
