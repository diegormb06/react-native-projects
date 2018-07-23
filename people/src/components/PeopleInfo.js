import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { capitalizeFirstLetter } from '../helpers'

const PeopleInfo = ({ label = '', content = '-' }) => (
  <View style={styles.details}>
    <Text style={styles.label}>{capitalizeFirstLetter(label)}</Text>
    <Text>{capitalizeFirstLetter(content)}</Text>
  </View>
);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
  },
  label: {
    fontWeight: 'bold'
  }
});

export default PeopleInfo;
