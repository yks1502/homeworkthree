import { createReducer, createActions } from 'reduxsauce';
import { fromJS } from 'immutable';

/* ------------- Types and Action Creators ------------- */

export const { Types, Creators } = createActions({
  exampleRequest: ['data'],
  exampleSuccess: ['payload'],
  exampleFailure: ['error'],
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
  example: {
    isFetching: false,
    payload: null,
    error: null,
  },
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
  }
});

/* ------------- Reducers ------------- */

export const exampleRequest = (state) =>
  state.mergeDeep({ example: { isFetching: true, payload: null, error: null } });

export const exampleSuccess = (state, payload) =>
  state.mergeDeep({ example: { isFetching: false, payload, error: null } });

export const exampleFailure = (state, error) =>
  state.mergeDeep({ example: { isFetching: false, payload: null, error } });

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
  state.mergeDeep({ user: { isFetching: false, payload: null, error } });

export const logout = (state) =>
  state.mergeDeep({ login: { payload: null }, user: { payload: null } });

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
  [Types.EXAMPLE_REQUEST]: exampleRequest,
  [Types.EXAMPLE_SUCCESS]: exampleSuccess,
  [Types.EXAMPLE_FAILURE]: exampleFailure,
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
