import reducerCreator from '../../../Utils/reducerCreator';
import {
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  LIST_TODO
} from '../../Actions/Todo/todoActionTypes';

const initialState = {
  todoList: []
};

const todoReducers = {
  [ADD_TODO]: (state, action) => {
    let todoList = [...state.todoList];
    action.payload.id = todoList.length + 1;
    todoList.push(action.payload);
    return {
      ...state,
      todoList
    };
  },
  [UPDATE_TODO]: (state, action) => {
    let todoList = [...state.todoList];
    let index = state.todoList.findIndex(item => {
      if (item) return item.id === action.payload.id;
    });
    todoList[index] = action.payload;
    return {
      ...state,
      todoList
    };
  },
  [REMOVE_TODO]: (state, action) => {
    let index = state.todoList.findIndex(item => {
      if (item) return item.id === action.payload;
    });
    let todoList = [...state.todoList];
    todoList[index] = null;
    return {
      ...state,
      todoList
    };
  },
  [LIST_TODO]: (state, action) => {
    return {
      ...state,
      todoList: action.payload
    };
  }
};

export default reducerCreator(initialState, todoReducers);
