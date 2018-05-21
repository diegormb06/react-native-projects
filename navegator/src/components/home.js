import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
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
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}
