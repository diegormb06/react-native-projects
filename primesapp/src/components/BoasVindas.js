import React from 'react';
import {View, Text, Button, ImageBackground, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../img/logo.png');
const bg = require('../img/bg.png');

export default () => (
  <ImageBackground source={bg} style={{width: '100%', flex: 1}}>
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: '#fff', fontSize: 20, marginBottom: 15}}>Bem Vindo Primata!</Text>
        <Image source={logo} />
      </View>
      <View style={{ flex: 1 }}>
        <Button 
          title='Fazer Login' 
          onPress={() => Actions.login()}
          color='#115E54'  
        />
      </View>
    </View>
  </ImageBackground>
)
