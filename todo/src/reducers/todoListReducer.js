import { ADD_TODO, TOOGLE_TODO } from "../actions";

let nextId = 1;

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:     
      const newTodo = { id: nextId++, text: action.text, done: false }
      return [...state, newTodo];
    
    case TOOGLE_TODO:
      console.log('chegou');
      return state.map(todo => {
        if (todo.id === action.todoId)
          return {...todo, done: !todo.done};
        return todo;
      });

    default:
      return state;
  }
}

export default todoListReducer;
