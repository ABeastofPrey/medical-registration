import { combineReducers } from "redux";
import { VISIBILITY_FILTERS } from "./constants";
import { SET_FILTER, ADD_TODO_SUCCESS, TOGGLE_TODO } from "./actions";

const initialState = VISIBILITY_FILTERS.ALL;

const initialStateTodo = {
  allIds: [],
  byIds: {}
};

const todos = (state = initialStateTodo, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCESS: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({ todos, visibilityFilter });
