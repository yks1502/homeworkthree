import { take, call, put } from 'redux-saga/effects';
import { Types, Creators as Actions } from './reducer';
import { setAuthToken, clearAuthToken, setUserId, clearUserId, getUserId } from '../services/localStorage';
import { request, authRequest } from '../services/api';

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
    setUserId(response.data.id);
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
    const userId = getUserId();
    const response = yield authRequest.get(`/users/${userId}/`);
    yield put(Actions.getUserSuccess(response.data));
  } catch (error) {
    yield put(Actions.logout());
    yield put(Actions.getUserFailure(error.errors));
  }
}

export function* watchLogout() {
  while (true) {
    yield take(Types.LOGOUT);
    clearAuthToken();
    clearUserId();
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
    yield authRequest.post('/promises/', { sinceWhen, tilWhen, user2 });
    yield put(Actions.createPromiseSuccess());
    yield call(getUser);
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
  watchLoginRequest,
  watchGetUserRequest,
  watchCreatePromiseRequest,
  watchGetUsersRequest,
  watchLogout,
];
