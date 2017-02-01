import isomorphicFetch from 'isomorphic-fetch';
import CONFIG from './config';

function resToJSON(response) {
  return response.json().then(json => json)
}

function fetch(endpoint, method, body = null, authorized = true) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (authorized) {
    headers['x-access-token'] = window.localStorage.getItem('token')
  }
  let params = {
    method, headers
  }
  if (body) params.body = JSON.stringify(body);
  return isomorphicFetch(
    `${CONFIG.apiUrl}/${endpoint}`, params
    ).then(resToJSON)
}


const API = {

  // FRIENDS
  fetchFriendsApi(rows) {
    return isomorphicFetch(`http://www.filltext.com/?rows=${rows}&fname={firstName}&lname={lastName}&pretty=true`)
      .then(resToJSON)
  },

  // TODOS
  fetchTodos() {
    return fetch('todo', 'GET')
  },

  addTodo(todo) {
    return fetch(
      'todo', 'POST', {
        text: todo.text,
        complete: todo.completed
      })
  },

  removeTodo(id) {
    return fetch(`todo/${id}`, 'DELETE')
  },

  // REGISTRATION
  registration(data) {
    return fetch('registration', 'POST', data, false)
  },

  // AUTHORIZATION
  authorize(data) {
    return fetch('auth', 'POST', data, false)
  },

  // USER
  getUserData() {
    return fetch('user', 'GET')
  }


}

export default API;