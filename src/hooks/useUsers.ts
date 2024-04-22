import { useQuery } from 'react-query';
import { fetchUsers } from '../services/api';

export const useUsers = (page: number) => {
  return useQuery(['users', page], () => fetchUsers(page));
};