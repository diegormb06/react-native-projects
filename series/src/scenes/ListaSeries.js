import React from 'react';
import { View, FlatList } from 'react-native';
import series from "../../series.json";
import SerieCard from '../components/SerieCard';

export default class ListaSeries extends React.Component {

  render() {
    return (
      <View style={{paddingVertical: 10}}>
        <FlatList
          data={series}
          renderItem={({ item, index }) => <SerieCard serie={item} index={index} /> }
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    )
  }
} 
