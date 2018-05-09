import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';

const pedraimg = require('../../img/pedra.png');
const papelimg = require('../../img/papel.png');
const tesouraimg = require('../../img/tesoura.png');

export default class Icone extends Component {
  render() {
    if (this.props.choose === 'pedra') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={pedraimg} />
        </View>
      );
    } else if (this.props.choose === 'papel') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={papelimg} />
        </View>
      );
    } else if (this.props.choose === 'tesoura') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={tesouraimg} />
        </View>
      );
    }
    
    return false;
  }
}
