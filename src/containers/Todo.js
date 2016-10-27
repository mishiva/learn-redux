import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from '../components/todo';
import * as todoActions from '../actions/TodoActions';

class TodoPage extends Component {
  render() {
    const { todo } = this.props
    const { addTodo, removeTodo } = this.props.todoActions
    return (
      <div>
        <Todo
          addTodo={addTodo}
          removeTodo={removeTodo}
          todos={todo.todos}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
