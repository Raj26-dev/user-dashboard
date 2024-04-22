import axios from 'axios';
import { UsersResponse } from '../types';

export const fetchUsers = async (page: number, searchQuery?: string): Promise<UsersResponse> => {
  const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
  return response.data;
};