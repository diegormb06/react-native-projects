import React, { Component } from "react";
import { View, TextInput, Button } from "react-native";
import { connect } from "react-redux";
import {
  inserirContato
} from '../actions/AppActions';

class AdicionarContato extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            placeholder='Email'
            style={{ fontSize: 20, height: 45 }}
            onChangeText={(email) => this.props.inserirContato(email)}
            value={this.props.adiciona_contato_email}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button title='Adicionar' color='#115E54' onPress={() => false} />
        </View>
      </View>
    )
  }
};

const mapStateToProps = state => ({
  adiciona_contato_email: state.AppReducer.adiciona_contato_email
})

export default connect(mapStateToProps, { inserirContato })(AdicionarContato)
