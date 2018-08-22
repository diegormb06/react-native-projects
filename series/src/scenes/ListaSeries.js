import React from 'react';
import { View, FlatList, Text } from 'react-native';
import series from "../../series.json";
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';

export default class ListaSeries extends React.Component {

  renderSerieCard(item, index) {
    if (item.isLast)
      return <AddSerieCard 
                index={index}
                onNavigate={() => this.props.navigation.navigate('AddSerieForm')}  
             />
    
    return (
      <SerieCard
        serie={item}
        index={index}
        onNavigate={() => this.props.navigation.navigate('SerieDetailPage', { serie: item })}
      />
    )
  }

  render() {
    return (
      <View style={{paddingVertical: 10}}>
        <FlatList
          data={[...series, { isLast: true }]}
          renderItem={({ item, index }) => this.renderSerieCard(item, index) }
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    )
  }
}
