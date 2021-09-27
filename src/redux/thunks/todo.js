import {
  getAllTodo,
  removeTodo,
  updateTodo,
  addTodo,
} from '../../services/todo';

import {
  successTodoList,
  successRemoveTodo,
  successUpdateTodo,
  successAddTodo,
} from '../../redux/actions/todo.action';

export const todoThunks = {
  getAll: () => (dispatch) => {
    getAllTodo().then((task) => dispatch(successTodoList(task)));
  },
  removeTodo: (id) => (dispatch) => {
    removeTodo(id).then((task) => dispatch(successRemoveTodo(task)));
  },
  updateTodo: (id) => (dispatch) => {
    updateTodo(id).then((task) => dispatch(successUpdateTodo(task)));
  },
  addTodo: (value) => (dispatch) => {
    addTodo(value).then((task) => dispatch(successAddTodo(task)));
  },
};
