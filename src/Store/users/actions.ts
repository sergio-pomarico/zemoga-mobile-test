import { User } from '../../Interfaces/models';
import { UsersActionsType } from './types';

export const getUser = (userId: number) => ({
  userId,
  type: UsersActionsType.GET_USER,
});

export const getUserSuccess = (user: User) => ({
  user,
  type: UsersActionsType.GET_USER_SUCCESS,
});

// Handle errors
export const getUserError = (error: string) => ({
  type: UsersActionsType.GET_USER_ERROR,
  error,
});
