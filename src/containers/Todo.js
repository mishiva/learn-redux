import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todo from '../components/todo';
import * as todoActions from '../actions/TodoActions';

class TodoPage extends Component {

  componentDidMount() {
    this.props.todoActions.getTodos();
  }

  componentWillUnmount() {
    this.props.todoActions.resetTodos();
  }

  render() {
    const { todo } = this.props
    const todoActions = this.props.todoActions
    return (
      <div>
        <Todo
          getTodos={todoActions.getTodos}
          addTodo={todoActions.addTodo}
          removeTodo={todoActions.removeTodo}
          todos={todo.todos}
        />
      </div>
    );
  }
  resetTodos
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
