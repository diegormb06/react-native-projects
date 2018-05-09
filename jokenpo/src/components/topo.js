import React, { Component } from 'react';
import { View, Image } from 'react-native';

const jokenpoimg = require('../../img/jokenpo.png');

export default class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={jokenpoimg} />
      </View>
    );
  }
}
