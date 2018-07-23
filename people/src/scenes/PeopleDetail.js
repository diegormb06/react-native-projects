import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import PeopleInfo from '../components/PeopleInfo';

export default class PeopleDeail extends React.Component {

  render() {
    const { people } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <Image source={{ uri: people.picture.large }} style={styles.avatar} />

        <View style={styles.containerDetails}>
          <PeopleInfo label='Email: ' content={people.email} />
          <PeopleInfo label='Cidade: ' content={people.location.city} />
          <PeopleInfo label='Estado: ' content={people.location.state} />
          <PeopleInfo label='Tel: ' content={people.phone} />
          <PeopleInfo label='Cel: ' content={people.cell} />
          <PeopleInfo label='Nacionalidade: ' content={people.nat} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  avatar: {
    width: 250,
    aspectRatio: 1,
    borderRadius: 200,
    alignSelf: 'center'
  },
  containerDetails: {
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    elevation: 1
  }
});
