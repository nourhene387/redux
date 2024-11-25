// src/JS/Actions/Actions.js
import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from '../Constants/Actions-types';

// Action creators
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), description, isDone: false }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});
