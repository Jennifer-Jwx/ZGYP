import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';
import {reducer as form} from 'redux-form';

// import auth from './auth';
// import authManager from './authManager';
import background from './background';
import clearSession from './clearSession';
import home from './home';

export default combineReducers({
  routing: routeReducer,
  reduxAsyncConnect,
  // auth,
  // authManager,
  form,
  background,
  clearSession,
  home,
});
