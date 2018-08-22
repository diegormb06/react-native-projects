import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import FormRow from '../components/FormRow';
import { connect } from "react-redux";
import { setField } from '../actions';

class AddSerieForm extends Component {
  
  render() {
    const { title, img } = this.props.serieForm;
    return (
      <View>
        <FormRow>
          <TextInput style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={value => this.props.setField('title', value)}
          />
        </FormRow>
        <FormRow>
          <TextInput style={styles.input}
            placeholder="URL da imagem"
            value={img}
            onChangeText={value => this.props.setField('img', value)}
          />
        </FormRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return {
    serieForm: state.serieFormReducer
  }
}

export default connect(mapStateToProps, { setField })(AddSerieForm);
