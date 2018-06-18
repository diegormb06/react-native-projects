import React, { Component } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
const imgEnviar = require('../img/enviar_mensagem.png');

class Conversa extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 50, backgroundColor: 'EEE4DC', padding: 10 }}>
        <View style={{ flex: 1, paddingBottom: 20 }}>
          <Text>Conversa com</Text>
        </View>
        <View style={{ flexDirection: 'row', height: 60 }}>
          <TextInput style={{ flex: 4, backgroundColor: '#FFF' }} />
          <TouchableOpacity onPress={() => false}>
            <Image source={imgEnviar} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Conversa;