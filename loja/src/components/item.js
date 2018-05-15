import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Item extends Component {

  render() {
    return (
      <View style={styles.item}>
        <View>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.details}>
          <Text>{this.props.item.titulo}</Text>
          <Text>R${this.props.item.valor},00</Text>
          <Text>{this.props.item.local_anuncio}</Text>
          <Text>{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderColor: '#999',
    borderWidth: 0.5,
    flexDirection: 'row',
    margin: 10,
    padding: 10
  },
  picture: {
    width: 102
  },
  details: {
    paddingLeft: 10
  }
});
