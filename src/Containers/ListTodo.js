import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './ReduxConfig';

const ListTodo = props => {
  useEffect(() => {
    props.onListTodo();
  }, []);
  //console.log(props.todoList.length);
  return props.todoList.length ? (
    <table className='table mt-5'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Is Completed?</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.todoList.map(item => {
          return item ? (
            <tr key={item.id}>
              <th scope='row'>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.isCompleted ? 'Yes' : 'No'}</td>
              <td>
                <button
                  type='button'
                  className='btn btn-danger'
                  onClick={() => props.onRemoveTodo(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ) : null;
        })}
      </tbody>
    </table>
  ) : null;
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
