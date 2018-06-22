import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { conversasUsuarioFetch } from "../actions/AppActions";

class Conversas extends Component {

  componentWillMount() {
    this.props.conversasUsuarioFetch()
    this.listaConversas = this.props.conversas;
  }

  componentWillReceiveProps(nextProps) {
    this.listaConversas = nextProps.conversas;
  }

  renderConversas(conversas) {
    return (
      <View>
        <Text>conversas.nome</Text>
        <Text>conversas.email</Text>
      </View>
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

const mapStateToProps = state => {
  const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
    return { ...val, uid };
  })

  return ({
    conversas,
  })
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas)
