import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import normalize from 'json-api-normalizer';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  normalizeData: ['data'],
  loginRequest: ['data'],
  loginSuccess: ['payload'],
  loginFailure: ['error'],
  getUserRequest: null,
  getUserSuccess: ['payload'],
  getUserFailure: ['error'],
  logout: null,
  createPromiseRequest: ['data'],
  createPromiseSuccess: null,
  createPromiseFailure: ['error'],
  getUsersRequest: null,
  getUsersSuccess: ['payload'],
  getUsersFailure: ['error'],
});

/* ------------- Initial State ------------- */

export const initialState = fromJS({
  entities: null,
  login: {
    isFetching: false,
    payload: null,
    error: null,
  },
  user: {
    isFetching: false,
    payload: null,
    error: null,
  },
  createPromise: {
    isFetching: false,
    error: null,
  },
  users: {
    isFetching: false,
    payload: null,
    error: null,
  },
});

/* ------------- Reducers ------------- */

export const normalizeData = (state, { data }) =>
  state.mergeDeep({ entities: normalize(data) });

export const loginRequest = (state) =>
  state.mergeDeep({ login: { isFetching: true, error: null } });

export const loginSuccess = (state, { payload }) =>
  state.mergeDeep({ login: { isFetching: false, error: null, payload } });

export const loginFailure = (state, { error }) =>
  state.mergeDeep({ login: { isFetching: false, error } });

export const getUserRequest = (state) =>
  state.mergeDeep({ user: { isFetching: true, error: null } });

export const getUserSuccess = (state, { payload }) =>
  state.mergeDeep({ user: { isFetching: false, error: null, payload } });

export const getUserFailure = (state, { error }) =>
  state.mergeDeep({ user: { isFetching: false, id: null, error } });

export const logout = (state) =>
  state.mergeDeep({ user: { payload: null } });

export const createPromiseRequest = (state) =>
  state.mergeDeep({ createPromise: { isFetching: true, error: null } });

export const createPromiseSuccess = (state) =>
  state.mergeDeep({ createPromise: { isFetching: false, error: null } });

export const createPromiseFailure = (state, { error }) =>
  state.mergeDeep({ createPromise: { isFetching: false, error } });

export const getUsersRequest = (state) =>
  state.mergeDeep({ users: { isFetching: true, error: null } });

export const getUsersSuccess = (state, { payload }) =>
  state.mergeDeep({ users: { isFetching: false, error: null, payload } });

export const getUsersFailure = (state, { error }) =>
  state.mergeDeep({ users: { isFetching: false, payload: null, error } });

/* ------------- Hookup Reducers To Types ------------- */

export default createReducer(initialState, {
  [Types.NORMALIZE_DATA]: normalizeData,
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
  [Types.GET_USER_REQUEST]: getUserRequest,
  [Types.GET_USER_SUCCESS]: getUserSuccess,
  [Types.GET_USER_FAILURE]: getUserFailure,
  [Types.LOGOUT]: logout,
  [Types.CREATE_PROMISE_REQUEST]: createPromiseRequest,
  [Types.CREATE_PROMISE_SUCCESS]: createPromiseSuccess,
  [Types.CREATE_PROMISE_FAILURE]: createPromiseFailure,
  [Types.GET_USERS_REQUEST]: getUsersRequest,
  [Types.GET_USERS_SUCCESS]: getUsersSuccess,
  [Types.GET_USERS_FAILURE]: getUsersFailure,
});
