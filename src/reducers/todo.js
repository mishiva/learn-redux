import {
  ADD_TODO,
  REMOVE_TODO
} from '../constants/Todo'

const initialState = {
  todos: []
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

    default: {
      return state
    }
  }

}
