/*import {
  //take,
  //takeEvery,
  takeLatest,
} from 'redux-saga/effects';*/

import {
  //take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from 'typed-redux-saga';

import * as types from './actionTypes';
import {
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
  createUserStart,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserError,
  updateUserStart,
  updateUserSuccess,
  updateUserError,
} from './actionCreators';
import {
  loadUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
} from './api';

function* onLoadUsersStartAsync() {
  try {
    const response = yield* call(loadUsersApi);
    if (response.status === 200) {
      yield* delay(500);
      yield* put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield* put(loadUsersError(error as Error));
  }
}

function* onLoadUsers() {
  yield* takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUserStartAsync({
  payload,
}: ReturnType<typeof createUserStart>) {
  try {
    const response = yield* call(createUserApi, payload);
    if (response.status === 201) {
      yield* put(createUserSuccess());
    }
  } catch (error) {
    yield* put(createUserError(error as Error));
  }
}

function* onCreateUser() {
  yield* takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

function* onUpdateUserStartAsync({
  payload: { userId, formValue },
}: ReturnType<typeof updateUserStart>) {
  try {
    const response = yield* call(updateUserApi, userId, formValue);
    if (response.status === 200) {
      yield* put(updateUserSuccess());
    }
  } catch (error) {
    yield* put(updateUserError(error as Error));
  }
}

function* onUpdateUser() {
  yield* takeLatest(types.UPDATE_USER_START, onUpdateUserStartAsync);
}

function* onDeleteUserStartAsync({
  payload,
}: ReturnType<typeof deleteUserStart>) {
  try {
    const response = yield* call(deleteUserApi, payload);
    if (response.status === 200) {
      yield* put(deleteUserSuccess());
    }
  } catch (error) {
    yield* put(deleteUserError(error as Error));
  }
}

function* onDeleteUser() {
  yield* takeLatest(types.DELETE_USER_START, onDeleteUserStartAsync);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onUpdateUser),
  fork(onDeleteUser),
];

export default function* rootSaga() {
  yield* all([...userSagas]);
}
