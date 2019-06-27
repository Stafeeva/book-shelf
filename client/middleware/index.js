import { loggerMiddleware } from './logger';
import { httpMiddleware } from './http';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
  loggerMiddleware,
  httpMiddleware
);
