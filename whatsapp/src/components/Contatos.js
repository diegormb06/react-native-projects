import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { contatosUsuarioFetch } from "../actions/AppActions";
import _ from 'lodash';

class Contatos extends Component {

  componentWillMount() {
    this.props.contatosUsuarioFetch();
  }

  render() {
    console.log(this.props.lista_contatos);
    return(
      <View>
        <Text>Contatos</Text>
      </View>
    )
  }
}

const mapStateToProps = state => (
  {
    lista_contatos: state.ListaContatosReducer.lista_contatos
  }
)

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos)
