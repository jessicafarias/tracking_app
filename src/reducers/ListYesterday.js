import { UPDATE_YESTERDAY_TASKS } from '../actions/types';

const initialState = [];

const ListYesterdayReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_YESTERDAY_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default ListYesterdayReducer;
