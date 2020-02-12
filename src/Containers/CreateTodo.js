import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './ReduxConfig';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: '',
      isCompleted: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    let fields = { ...this.state };
    fields[event.target.id] = event.target.value;
    this.setState({ ...fields });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onSaveOrUpdate(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            className='form-control'
            id='name'
            placeholder='Insert a name'
            onChange={this.onInputChange}
            value={this.state.name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='completed'>Is Complete?</label>
          <select
            className='form-control'
            onChange={this.onInputChange}
            value={this.state.isCompleted}
            id='isCompleted'
          >
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </div>
        <button type='submit' className='btn btn-dark'>
          Save
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
