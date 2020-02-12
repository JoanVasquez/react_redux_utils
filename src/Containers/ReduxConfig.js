import {
  saveOrUpdate,
  listTodo,
  removeTodo
} from '../Store/Actions/Todo/todoAction';

export const mapStateToProps = state => ({
  todoList: state.todo.todoList
});

export const mapDispatchToProps = dispatch => ({
  onListTodo: () => dispatch(listTodo()),
  onSaveOrUpdate: todo => dispatch(saveOrUpdate(todo)),
  onRemoveTodo: id => dispatch(removeTodo(id))
});
