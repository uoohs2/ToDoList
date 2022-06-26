import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  router: connectRouter(history),
});

const middlewares = [routerMiddleware(history)];
const env = process.env.NODE_ENV;
if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(...middlewares),
});
