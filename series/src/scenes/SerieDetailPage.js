import React, { Component } from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import LongText from "../components/LongText";

export default class  extends Component {
  render() {
    const { serie } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: serie.img }} aspectRatio={1} />
        <ListItem label='Title' content={serie.title} />
        <ListItem label='Rate' content={serie.rate} />
        <ListItem label='Gender' content={serie.gender} />
        <LongText label='Description' content={serie.description} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
