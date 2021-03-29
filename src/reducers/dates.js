import { FETCH_DATES } from '../actions/types';

const initialState = [];

const datesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATES:
      return [...action.payload];
    default:
      return state;
  }
};

export default datesReducer;
