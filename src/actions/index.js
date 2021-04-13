import * as types from './types';

export const fetchTasksAction = tasks => ({
  type: types.FETCH_TASKS,
  payload: tasks,
});

export const todayTasksAction = tasks => ({
  type: types.UPDATE_TODAY_TASKS,
  payload: tasks,
});

export const yesterdayTasksAction = tasks => ({
  type: types.UPDATE_YESTERDAY_TASKS,
  payload: tasks,
});

export const updateTaskAction = tasks => ({
  type: types.FETCH_TASKS,
  payload: tasks,
});

export const fetchDatesAction = dates => ({
  type: types.FETCH_DATES,
  payload: dates,
});
