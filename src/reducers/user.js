// user_token
import { GET_TOKEN } from '../actions/types';

const initialState = '';

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
