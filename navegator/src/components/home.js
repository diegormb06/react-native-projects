import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import LogoTitle from "./LogoTitle";

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="Info"
          color="#ccc"
        />
      ),
      /* the rest of this config is unchanged */
    };
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', {
              itemId: {"prop1": "item 1", "prop2": "prop2"},
              title: 'Screen Details',
            });
          }}
        />
      </View>
    );
  }
}
