import { take, call, put, select } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { setAuthToken, clearAuthToken } from '../services/localStorage';
import { request, authRequest } from '../services/api';
import { makeSelectUserId } from './selectors';

export function* watchExampleRequest() {
  while (true) {
    const { data } = yield take(Types.EXAMPLE_REQUEST);
    yield call(example, data);
  }
}

export function* example() {
  try {
  } catch (error) {

  }
}

export function* watchLoginRequest() {
  while (true) {
    const { data } = yield take(Types.LOGIN_REQUEST);
    yield call(login, data);
  }
}

export function* login({ username, password }) {
  try {
    const response = yield request.post('/api-token-auth/', { username, password });
    yield put(Actions.loginSuccess(response.data));
    setAuthToken(response.data.token);
    yield call(getUser);
    yield call(getUsers);
  } catch (error) {
    yield put(Actions.loginFailure(error.errors));
  }
}

export function* watchGetUserRequest() {
  while (true) {
    yield take(Types.GET_USER_REQUEST);
    yield call(getUser);
  }
}

export function* getUser() {
  try {
    const id = yield select(makeSelectUserId());
    const response = yield authRequest.get(`/users/${id}/`);
    yield put(Actions.getUserSuccess(response.data));
  } catch (error) {
    yield put(Actions.getUserFailure(error.errors));
  }
}

export function* watchLogout() {
  while (true) {
    yield take(Types.LOGOUT);
    clearAuthToken();
  }
}

export function* watchCreatePromiseRequest() {
  while (true) {
    const { data } = yield take(Types.CREATE_PROMISE_REQUEST);
    yield call(createPromise, data);
  }
}

export function* createPromise({ sinceWhen, tilWhen, user2 }) {
  try {
    const response = yield authRequest.post('/promises/', { sinceWhen, tilWhen, user2 });
    yield put(Actions.createPromiseSuccess());
  } catch (error) {
    yield put(Actions.createPromiseFailure(error.errors));
  }
}

export function* watchGetUsersRequest() {
  while (true) {
    yield take(Types.GET_USERS_REQUEST);
    yield call(getUsers);
  }
}

export function* getUsers() {
  try {
    const response = yield authRequest.get('/users/');
    yield put(Actions.getUsersSuccess(response.data));
  } catch (error) {
    yield put(Actions.getUsersFailure(error.errors));
  }
}

export default [
  watchExampleRequest,
  watchLoginRequest,
  watchGetUserRequest,
  watchCreatePromiseRequest,
  watchGetUsersRequest,
];
