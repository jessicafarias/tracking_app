// user_token
import { GET_TOKEN } from '../actions/types';

const initialState = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJleHAiOjE2MjQ0OTMwNzMsImlhdCI6MTYxNTg1MzA3M30.cB9d38E94bVDTurbuU9aCASHiRgx3VXWXnUPeYioMAo';

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
