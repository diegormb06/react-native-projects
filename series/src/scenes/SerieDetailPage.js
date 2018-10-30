import React, { Component } from "react"
import { ScrollView, View, Image, StyleSheet, Button } from "react-native"
import ListItem from "../components/ListItem"
import LongText from "../components/LongText"
import { connect } from 'react-redux'
import { deleteSerie } from '../actions/serieFormActions'

class SerieDetailPage  extends Component {

  editSerie(serie) {
    this.props.navigation.replace('AddSeriePage', { serie })
  }

  async apagarSerie(serie) {
    const hasDeleted = await this.props.deleteSerie(serie)
    console.log(hasDeleted)
    if (hasDeleted) {
      this.props.navigation.goBack()
    }
  }

  render() {
    const { serie } = this.props.navigation.state.params
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: serie.img }} aspectRatio={1} />
        <ListItem label='Title' content={serie.title} />
        <ListItem label='Rate' content={serie.rate} />
        <ListItem label='Gender' content={serie.gender} />
        <LongText label='Description' content={serie.description} />
          <Button onPress={()=>this.editSerie(serie)} title="Editar" />
        <View style={styles.buttonDelete}>
          <Button onPress={() => this.apagarSerie(serie)} title="Deletar" color="red"/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  buttonDelete: {
    marginVertical: 8
  }
})

export default connect(null, { deleteSerie })(SerieDetailPage)