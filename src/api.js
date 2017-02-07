import isomorphicFetch from 'isomorphic-fetch';
import CONFIG from './config';
import { getTokenValue } from './helpers/auth';
import { reduce } from 'lodash';


function resToJSON(response) {
  return response.json().then(json => json)
}

function fetch(endpoint, method, body = null, authorized = true) {
  let headers = {
    'Content-Type': 'application/json'
  }
  if (authorized) {
    const token = getTokenValue()
    headers['x-access-token'] = token
  }
  let params = {
    method, headers
  }
  if (body) {
    if (method == 'POST') params.body = JSON.stringify(body);
    if (method == 'GET') {
      endpoint += reduce(body, (memo, value, key) => {
         return `${memo + key}=${value}&`;
        }, '?').slice(0, -1)
    }
  }
  return isomorphicFetch(
    `${CONFIG.apiUrl}/${endpoint}`, params
    ).then(resToJSON)
}


const API = {

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
  getCurrentUserData() {
    return fetch('user', 'GET')
  },

  fetchUsers(query) {
    return fetch('user/list', 'GET', query)
  }

}

export default API;