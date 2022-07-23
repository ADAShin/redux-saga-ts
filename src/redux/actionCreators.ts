import { AddEditFormValue, TUser } from '../types';
import * as types from './actionTypes';

export const loadUsersStart = () => {
  return {
    type: types.LOAD_USERS_START,
  };
};

export const loadUsersSuccess = (users: TUser[]) => {
  return {
    type: types.LOAD_USERS_SUCCESS,
    payload: users,
  };
};

export const loadUsersError = (error: Error) => {
  return {
    type: types.LOAD_USERS_ERROR,
    payload: error,
  };
};

export const createUserStart = (formValue: AddEditFormValue) => {
  return {
    type: types.CREATE_USER_START,
    payload: formValue,
  };
};

export const createUserSuccess = () => {
  return {
    type: types.CREATE_USER_SUCCESS,
  };
};

export const createUserError = (error: Error) => {
  return {
    type: types.CREATE_USER_ERROR,
    payload: error,
  };
};

export const updateUserStart = (
  userId: number,
  formValue: AddEditFormValue
) => {
  return {
    type: types.UPDATE_USER_START,
    payload: { userId, formValue },
  };
};

export const updateUserSuccess = () => {
  return {
    type: types.UPDATE_USER_SUCCESS,
  };
};

export const updateUserError = (error: Error) => {
  return {
    type: types.UPDATE_USER_ERROR,
    payload: error,
  };
};

export const deleteUserStart = (userId: number) => {
  return {
    type: types.DELETE_USER_START,
    payload: userId,
  };
};

export const deleteUserSuccess = () => {
  return {
    type: types.DELETE_USER_SUCCESS,
  };
};

export const deleteUserError = (error: Error) => {
  return {
    type: types.DELETE_USER_ERROR,
    payload: error,
  };
};

/*type LoadUsersStartAction = ReturnType<typeof loadUsersStart>;
type LoadUsersSuccessAction = ReturnType<typeof loadUsersSuccess>;
type LoadUsersErrorAction = ReturnType<typeof loadUsersError>;

type LoadUsersActions =
  | LoadUsersStartAction
  | LoadUsersSuccessAction
  | LoadUsersErrorAction;

type CreateUserStartAction = ReturnType<typeof createUserStart>;
type CreateUserSuccessAction = ReturnType<typeof createUserSuccess>;
type CreateUserErrorAction = ReturnType<typeof createUserError>;

type CreateUserActions =
  | CreateUserStartAction
  | CreateUserSuccessAction
  | CreateUserErrorAction;

type UpdateUserStartAction = ReturnType<typeof updateUserStart>;
type UpdateUserSuccessAction = ReturnType<typeof updateUserSuccess>;
type UpdateUserErrorAction = ReturnType<typeof updateUserError>;

type UpdateUserActions =
  | UpdateUserStartAction
  | UpdateUserSuccessAction
  | UpdateUserErrorAction;

type DeleteUserStartAction = ReturnType<typeof deleteUserStart>;
type DeleteUserSuccessAction = ReturnType<typeof deleteUserSuccess>;
type DeleteUserErrorAction = ReturnType<typeof deleteUserError>;

type DeleteUserActions =
  | DeleteUserStartAction
  | DeleteUserSuccessAction
  | DeleteUserErrorAction;

export type Actions =
  | LoadUsersActions
  | CreateUserActions
  | UpdateUserActions
  | DeleteUserActions;*/
