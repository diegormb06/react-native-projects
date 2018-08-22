import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = ({ label = '', content = '-' }) => (
  <View style={styles.details}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#aaa'
  },
  label: {
    flex: 2,
    fontWeight: 'bold'
  },
  content: {
    flex: 5
  }
});

export default ListItem;