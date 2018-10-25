import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Button } from "react-native";
import ListItem from "../components/ListItem";
import LongText from "../components/LongText";

export default class  extends Component {

  editSerie(serie) {
    this.props.navigation.navigate('AddSeriePage', { serie })
  }

  render() {
    const { serie } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: serie.img }} aspectRatio={1} />
        <ListItem label='Title' content={serie.title} />
        <ListItem label='Rate' content={serie.rate} />
        <ListItem label='Gender' content={serie.gender} />
        <LongText label='Description' content={serie.description} />
        <View style={styles.buttonAtualizar}>
          <Button onPress={()=>this.editSerie(serie)} title="Editar" />
        </View>
        <Button onPress={()=>false} title="Deletar" color="red"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  buttonAtualizar: {
    marginBottom: 5
  }
})
