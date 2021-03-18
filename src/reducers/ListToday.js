import { UPDATE_TODAY_TASKS } from '../actions/types';

const initialState = [];

const ListTodayReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODAY_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default ListTodayReducer;
