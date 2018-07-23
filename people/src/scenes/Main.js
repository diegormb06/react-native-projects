import React from 'react';
import axios from 'axios';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import PeopleList from '../components/PeopleList';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = { people: [], loading: false };
  }

  componentWillMount() {
    this.setState({loading: true});
    axios.get('https://randomuser.me/api/?nat=br&results=10')
      .then(response => {
        const { results } = response.data;
        this.setState({ people: results, loading: false, error: false });
      })
      .catch(erro => {
        this.setState({ loading: false, error: true })
      });
  }

  renderLoading() {
    if( this.state.loading )
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color='blue' />
        </View>
      )
    return null
  }

  renderError() {
    if(this.state.error)
      return (
        <View style={styles.container}>
          <Text style={styles.errorMessage}>Não foi possível carregar os dados</Text>
        </View>
      )
    return null
  }

  render() {
    return (
      <View>
        { this.renderLoading() }
        { this.renderError() }
        <PeopleList 
          peoples={this.state.people}
          onPressItem={(peopleData) => this.props.navigation.navigate('PeopleDetail', peopleData)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  errorMessage: {
    fontSize: 18
  }
});
