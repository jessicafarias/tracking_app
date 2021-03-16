import { combineReducers } from 'redux';
import taskReducer from './task';
import tokenReducer from './user';

const rootReducer = combineReducers({
  tasks: taskReducer,
  token: tokenReducer,
});

export default rootReducer;
