import * as types from './actionTypes';
import { TUser } from '../types';
import { Actions } from './actionCreators';

export type UsersState = {
  users: TUser[];
  loading: boolean;
  error: Error | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (
  state: UsersState = initialState,
  action: Actions
): UsersState => {
  switch (action.type) {
    case types.LOAD_USERS_START:
    case types.CREATE_USER_START:
    case types.UPDATE_USER_START:
    case types.DELETE_USER_START:
      return { ...state, loading: true };
    case types.LOAD_USERS_SUCCESS:
      return { ...state, users: action.payload, loading: false, error: null };
    case types.CREATE_USER_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
    case types.DELETE_USER_SUCCESS:
      return { ...state, loading: false, error: null };
    case types.LOAD_USERS_ERROR:
    case types.CREATE_USER_ERROR:
    case types.UPDATE_USER_ERROR:
    case types.DELETE_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
  }
};

export default usersReducer;
