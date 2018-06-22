import React, { Component } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet 
} from "react-native";
import { connect } from "react-redux";
import _ from "lodash";
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from "../actions/AppActions";
const imgEnviar = require('../img/enviar_mensagem.png');

class Conversa extends Component {

  componentWillMount() {
    this.props.conversaUsuarioFetch(this.props.contatoEmail);
    this.listaConversa = this.props.conversa;
  }

  componentWillReceiveProps(nextProps) {
    if ( this.props.contatoEmail !== nextProps.contatoEmail ) {
      this.props.conversaUsuarioFetch(nextProps.contatoEmail);
    }
    this.listaConversa = nextProps.conversa;
  }

  _enviarMensagem = () => {
    const { mensagem, contatoNome, contatoEmail } = this.props;
    const dadosConversa = { mensagem, contatoNome, contatoEmail }
    this.props.enviaMensagem(dadosConversa);
  }

  renderMensagem(item) {
    if (item.tipo === 'e') {
      return (
        <Text 
          key={item.mensagem} 
          style={[styles.mensagemTexto, styles.textoEnviado]}>
          {item.mensagem}
        </Text>
      )
    }

    return (
      <Text 
        key={item.mensagem} 
        style={[styles.mensagemTexto, styles.textoRecebido]}>
        {item.mensagem}
      </Text>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EEE4DC', padding: 10 }}>
        <View style={{ flex: 1, flexDirection:'row', alignItems: 'flex-end' }}>
          <FlatList
            data={this.listaConversa}
            renderItem={({ item }) => this.renderMensagem(item)}
          />
        </View>

        <View style={{ flexDirection: 'row', height: 60 }}>
          <TextInput style={{ flex: 4, backgroundColor: '#FFF' }}
            value={this.props.mensagem}
            onChangeText={texto => this.props.modificaMensagem(texto)}
          />
          <TouchableOpacity onPress={() => this._enviarMensagem()}>
            <Image source={imgEnviar} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mensagemTexto: {
    marginVertical: 5,
    padding: 10, 
    fontSize: 18,
    elevation: 1,
    borderRadius: 5
  },
  textoEnviado: {
    alignSelf: 'flex-end',
    backgroundColor: '#dbf5b4',
  },
  textoRecebido: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
  }
})

const mapStateToProps = state => {
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
    return {...val, uid};
  })

  return ({
    conversa,
    mensagem: state.AppReducer.mensagem
  })
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa)
