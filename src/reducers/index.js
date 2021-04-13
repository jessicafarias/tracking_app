import { combineReducers } from 'redux';
import datesReducer from './dates';
import taskReducer from './task';
import ListTodayReducer from './ListToday';
import ListYesterdayReducer from './ListYesterday';

const rootReducer = combineReducers({
  tasks: taskReducer,
  dates: datesReducer,
  today: ListTodayReducer,
  yesterday: ListYesterdayReducer,
});

export default rootReducer;
