import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { conversasUsuarioFetch } from "../actions/AppActions";
import { Actions } from "react-native-router-flux";

class Conversas extends Component {

  componentWillMount() {
    this.props.conversasUsuarioFetch()
    this.listaConversas = this.props.conversas;
  }

  componentWillReceiveProps(nextProps) {
    this.listaConversas = nextProps.conversas;
  }

  renderConversas(conversas) {
    let parametrosConversa = {
      title: conversas.nome,
      contatoNome: conversas.nome,
      contatoEmail: conversas.email
    }
    return (
      <TouchableHighlight onPress={() => Actions.conversa(parametrosConversa)} >
        <View style={styles.listItem}>
          <Text style={styles.contatoNome}>{conversas.nome}</Text>
          <Text style={styles.contatoMensagem}>{conversas.mensagem}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        <FlatList 
          data={this.listaConversas}
          renderItem={({ item }) => this.renderConversas(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  contatoNome: { fontSize: 25, color: '#383838' },
  contatoMensagem: { fontSize: 15 }
})

const mapStateToProps = state => {
  const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
    return { ...val, uid };
  })

  return ({
    conversas,
  })
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas)
