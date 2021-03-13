import { FETCH_TASKS } from '../actions/types';

const initialState = [{
  id: 1,
  name: 'left bicep',
  progress: 60.3,
  img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
}, {
  id: 2,
  name: 'right bicep',
  progress: 80.3,
  img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
}, {
  id: 3,
  name: 'right bicep',
  progress: 87.3,
  img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
}, {
  id: 4,
  name: 'right bicep',
  progress: 87.3,
  img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
}, {
  id: 5,
  name: 'right bicep',
  progress: 87.3,
  img: 'https://img.icons8.com/wired/64/000000/flex-biceps.png',
}, {
  id: 6,
  name: 'right bicep',
  progress: 87.3,
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
