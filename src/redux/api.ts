import axios, { AxiosResponse } from 'axios';
import { AddEditFormValue, TUser } from '../types';

export const loadUsersApi = async () =>
  await axios.get<{}, AxiosResponse<TUser[]>>(`http://localhost:4000/users`);

export const loadUserApi = async (userId: number) =>
  await axios.get<{}, AxiosResponse<TUser>>(
    `http://localhost:4000/users/${userId}`
  );

export const createUserApi = async (formData: AddEditFormValue) =>
  await axios.post<{}, AxiosResponse>('http://localhost:4000/users', formData);

export const updateUserApi = async (
  userId: number,
  formData: AddEditFormValue
) =>
  await axios.put<{}, AxiosResponse>(
    `http://localhost:4000/users/${userId}`,
    formData
  );

export const deleteUserApi = async (userId: number) =>
  await axios.delete<{}, AxiosResponse>(
    `http://localhost:4000/users/${userId}`
  );
