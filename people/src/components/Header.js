import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    backgroundColor: '#6ca2f7',
    padding: 5
  },
  title: {
    fontSize: 40,
    color: '#fff'
  }
})

export default Header;
