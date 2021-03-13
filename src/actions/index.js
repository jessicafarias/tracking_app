import * as types from './types';

export const fetchTasksAction = tasks => ({
  type: types.FETCH_TASKS,
  payload: tasks,
});

export const updateTaskAction = tasks => ({
  type: types.FETCH_TASKS,
  payload: tasks,
});
