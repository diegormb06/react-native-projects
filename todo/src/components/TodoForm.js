import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo, setTodoText, updateTodo } from '../actions'

class TodoForm extends Component {

  onChangeText(text) {
    this.props.setTodoText(text);
  }

  onPress() {
    const { todo } = this.props
    if (todo.id)
      return this.props.updateTodo(todo);

    this.props.addTodo(todo.text);
  }

  render() {
    const { text, id } = this.props.todo;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input value={text} onChangeText={text => this.onChangeText(text)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title={id ? 'Save' : 'Add'} onPress={() => this.onPress()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row'
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
})

mapStateToProps = state => {
  return { todo: state.editingTodo }
}

export default connect(mapStateToProps, { addTodo, setTodoText, updateTodo })(TodoForm)
