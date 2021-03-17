import { FETCH_TASKS } from '../actions/types';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default taskReducer;
