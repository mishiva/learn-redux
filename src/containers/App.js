import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/user';
import Page from '../components/page';
import Todo from '../components/todo';
import * as pageActions from '../actions/PageActions';
import * as todoActions from '../actions/TodoActions';

class App extends Component {
  render() {
    const { user, page, todo } = this.props
    const { getPhotos } = this.props.pageActions
    const { addTodo, removeTodo } = this.props.todoActions
    return (
      <div>
        <User user={user} />
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotos}
          fetching={page.fetching}
           />
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
    user: state.user,
    page: state.page,
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    todoActions: bindActionCreators(todoActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
