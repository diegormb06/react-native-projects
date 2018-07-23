import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import PeopleListItem from './PeopleListItem';

export default class PeopleList extends React.Component {

  _renderPeople(item) {
    return (
      <PeopleListItem
        people={item}
        onPressItem={this.props.onPressItem}
      />
    )
  }

  render() {
    return(
      <FlatList
        style={styles.container}
        data={this.props.peoples}
        renderItem={({ item }) => this._renderPeople(item)}
        keyExtractor={item => item.login.md5}
      />
    )
  }
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15
  }
})
