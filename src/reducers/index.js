import { combineReducers } from 'redux';
import taskReducer from './task';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
