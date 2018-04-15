import { createSelector } from 'reselect';

const makeSelectGlobal = () => (state) => state.get('global');

const makeSelectLogin = () => createSelector(
  makeSelectGlobal(),
  (global) => global.get('login'),
);

const makeSelectUserId = () => createSelector(
  makeSelectLogin(),
  (login) => login.getIn(['payload', 'id']),
);

const makeSelectUser = () => createSelector(
  makeSelectGlobal(),
  (global) => global.getIn(['user', 'payload']),
);

const makeSelectEveryUser = () => createSelector(
  makeSelectGlobal(),
  (global) => global.getIn(['users', 'payload']),
);

export {
  makeSelectGlobal,
  makeSelectUserId,
  makeSelectLogin,
  makeSelectUser,
  makeSelectEveryUser,
};
