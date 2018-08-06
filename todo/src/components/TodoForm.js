import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Input from './Input';
import { addTodo } from '../actions'

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onPress() {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;
    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input value={text} onChangeText={text => this.onChangeText(text)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Add' onPress={() => this.onPress()} />
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

export default connect(null, { addTodo })(TodoForm)
