import React, { Component } from 'react'

export default class Todo extends Component {

  handleAddTodo() {
    const inp = this.refs.inp;
    const val = inp.value.replace(/\s/, '');
    if(!val) return;
    this.props.addTodo(val);
    inp.value = '';
  }

  handleKeydownInp(e) {
    if(e.keyCode === 13) {
      this.handleAddTodo();
    }
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    const inpStyles = {
      width: '200px',
      height: '20px',
      margin: '10px',
      outline: 'none'
    }
    const todos = this.props.todos.map((todo, i)=> {
      return <li key={i}>
        <span>{todo.text}</span>
        <button onClick={()=> ::this.removeTodo(todo.id)}>x</button>
      </li>
    });
    return(
      <div>
        <input onKeyDown={::this.handleKeydownInp} ref='inp' className='input' style={inpStyles} />
        <br />
        <button onClick={::this.handleAddTodo}>add todo</button>
        <hr />
        <ul>{todos}</ul>
      </div>
    )
  }

}
