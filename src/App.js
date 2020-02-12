import React from 'react';
import CreateTodo from './Containers/CreateTodo';
import { Provider } from 'react-redux';
import store from './Store/store';
import ListTodo from './Containers/ListTodo';

function App() {
  return (
    <Provider store={store}>
      <div className='container-fluid'>
        <div className='row mt-5'>
          <div className='col-12'>
            <CreateTodo />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <ListTodo />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
