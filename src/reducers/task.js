import { FETCH_TASKS } from '../actions/types';

const initialState = [{
  id: 1,
  name: 'left bicep',
  progress: 60.3,
  img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
}];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return [...action.payload];
    default:
      return state;
  }
};

export default taskReducer;
