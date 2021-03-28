import { FETCH_DATES } from '../actions/types';

const initialState = [
  { id: 1, expiration_day: new Date().toLocaleString('en-GB').slice(0, 10).replaceAll('/', '-') },
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
