import { useInfiniteQuery } from 'react-query';
import { fetchUsers } from '../services/api';

export const useInfiniteUsers = (searchQuery: string) => {
  return useInfiniteQuery(['users', searchQuery], 
    ({ pageParam = 1 }) => fetchUsers(pageParam, searchQuery), {
      getNextPageParam: (lastPage, allPages) => lastPage.info.page + 1
  });
};