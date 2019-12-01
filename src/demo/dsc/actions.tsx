export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";

let nextTodoId = 0;

export const addTodo = content => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content
    }
  };
};

export const addTodoSuccess = content => ({
  type: ADD_TODO_SUCCESS,
  payload: content
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id
  }
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: {
    filter
  }
});
