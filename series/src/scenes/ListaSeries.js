import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import firebase from 'firebase'
import _ from 'lodash'

export default class ListaSeries extends React.Component {

  state = {
    visible: true,
    series: null
  }

  componentWillMount() {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`users/${currentUser.uid}/series`)
    .on('value', (snapshot) => {
      const newSeries = _.map(snapshot.val(), (val, uid) => { return { ...val, id: uid } })
      this.setState({ series: newSeries });
    })
  }

  renderSerieCard(item, index) {
    if (item.isLast)
      return <AddSerieCard 
              index={index}
              onNavigate={() => this.props.navigation.navigate('AddSeriePage')}  
             />

    return <SerieCard visible={this.state.visible}
            serie={item}
            index={index}
            onNavigate={() => this.props.navigation.navigate('SerieDetailPage', { serie: item })}
           />
  }

  render() {
    if ( !this.state.series ) 
      return <ActivityIndicator />

    return (
      <View style={{paddingVertical: 10}}>
        <FlatList
          data={[...this.state.series, { isLast: true }]}
          renderItem={({ item, index }) => this.renderSerieCard(item, index) }
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    )
  }
}
