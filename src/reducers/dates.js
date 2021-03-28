import { FETCH_DATES } from '../actions/types';

const initialState = [
  { id: 1, expiration_day: new Date().toLocaleString('en-US').slice(0, 10).replace('/', '-') },
];

const datesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATES:
      return [...action.payload];
    default:
      return state;
  }
};

export default datesReducer;
