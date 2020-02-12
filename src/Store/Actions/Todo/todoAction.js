import {
  ADD_TODO,
  UPDATE_TODO,
  LIST_TODO,
  REMOVE_TODO
} from './todoActionTypes';
import actionCreator from '../../../Utils/actionCreator';
import dummyData from '../../../dummyData';

export const saveOrUpdate = todo => {
  console.log(todo);
  if (todo.id) {
    //UPDATE
    return actionCreator(UPDATE_TODO, 'payload')(todo);
  } else {
    //SAVE
    return actionCreator(ADD_TODO, 'payload')(todo);
  }
};

export const listTodo = () => {
  return dispatch => {
    dummyData().then(data =>
      dispatch(actionCreator(LIST_TODO, 'payload')(data))
    );
  };
};

export const removeTodo = id => {
  return dispatch => {
    dispatch(actionCreator(REMOVE_TODO, 'payload')(id));
  };
};
