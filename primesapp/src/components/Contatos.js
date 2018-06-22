import React, { Component } from "react";
import { View, Text, TouchableHighlight, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import _ from 'lodash';
import { contatosUsuarioFetch } from "../actions/AppActions";

class Contatos extends Component {

  componentWillMount() {
    this.props.contatosUsuarioFetch();
    this.listaContatos = this.props.contatos;
  }

  componentWillReceiveProps(nextProps) {
    this.listaContatos = nextProps.contatos;
  }

  renderListItem(contato) {
    let parametrosConversa = {
      title: contato.nome,
      contatoNome: contato.nome,
      contatoEmail: contato.email
    }
    return (
      <TouchableHighlight onPress={() => Actions.conversa(parametrosConversa)} >
        <View style={styles.listItem}>
          <Text style={styles.contatoNome}>{contato.nome}</Text>
          <Text style={styles.contatoEmail}>{contato.email}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return(
      <View>
        <FlatList
          data={this.listaContatos}
          renderItem={({item}) => this.renderListItem(item)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listItem: { 
    flex: 1, 
    padding: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#CCC' 
  },
  contatoImg: {
    marginRight: 20
  },
  contatoNome: { fontSize: 25 },
  contatoEmail: { fontSize: 15 }
})

const mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => { return { ...val, uid } })
  return { contatos }
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos)
