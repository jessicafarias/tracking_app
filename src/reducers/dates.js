import { FETCH_DATES } from '../actions/types';

const initialState = [
  { id: 1, expiration_day: new Date().toLocaleString('en-GB').slice(0, 10) },
  { id: 2, expiration_day: '8 september 2013' },
  { id: 3, expiration_day: '9 september 2013' },
  { id: 4, expiration_day: '10 september 2013' },
  { id: 5, expiration_day: '11 september 2013' },
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
