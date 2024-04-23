import axios from 'axios';
import { User, UsersResponse } from '../types';

export const fetchUsers = async (page: number, searchQuery?: string): Promise<UsersResponse> => {
  const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
  return response.data;
};

// Update in services/api.ts
export const fetchUserDetail = async (email: string): Promise<User> => {
  const response = await axios.get(`https://randomuser.me/api/?results=1&email=${email}`);
  return response.data.results[0]; // Assuming the API returns an array
};
