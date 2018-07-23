import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { capitalizeFirstLetter } from '../helpers'

const PeopleListItem = (props) => {
  const { name, picture } = props.people;
  const { people, onPressItem } = props;

  return (
    <TouchableOpacity onPress={() => onPressItem({ people })}>
      <View style={styles.listItem}>
        <Image source={{ uri: picture.thumbnail}} style={styles.avatar} />
        <Text style={styles.itemName}>{`${capitalizeFirstLetter(name.first)} ${capitalizeFirstLetter(name.last)}`}</Text>
      </View>
    </TouchableOpacity>  
  )
};

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  avatar: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 50
  },
  itemName: {
    flex: 6,
    fontSize: 20,
    paddingLeft: 15,
    fontWeight: 'bold',
  }
});

export default PeopleListItem;
