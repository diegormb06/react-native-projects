import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo, setEditingTodo } from "../actions";
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleTodo, setEditingTodo}) => (
  <View>
    {todos.map(todo => (
      <TodoListItem 
        key={todo.id} 
        todo={todo} 
        onPressTodo={() => toggleTodo(todo.id)} 
        onLongPressTodo={() => setEditingTodo(todo)}
      />
    ))}
  </View>
);

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
}

export default connect(mapStateToProps, { toggleTodo, setEditingTodo })(TodoList);
