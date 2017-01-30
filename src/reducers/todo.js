import {
  ADD_TODO,
  REMOVE_TODO,
  GET_TODOS_SUCCEEDED,
  TODO_REQUEST_FAILED,
  TODO_REQUEST_PENDING
} from '../constants/Todo'

const initialState = {
  todos: [],
  pending: false
}


export default function todo(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
          todos: [...state.todos, {
            text: action.payload.text,
            id: action.payload.id
          }]
        })
    }

    case REMOVE_TODO: {
    const indx = state.todos.findIndex(x => x.id === action.payload)
      return Object.assign({}, state, {
          todos: [
            ...state.todos.slice(0, indx),
            ...state.todos.slice(indx + 1)
          ]
        })
    }

    case GET_TODOS_SUCCEEDED:
      return Object.assign({}, state, {
        todos: action.payload,
        message: '',
        pending: false
      })

    case TODO_REQUEST_FAILED:
      return Object.assign({}, state, {
        message: action.payload,
        pending: false
      })

    case TODO_REQUEST_PENDING:
      return Object.assign({}, state, {
        pending: true
      })

    default: {
      return state
    }
  }

}
