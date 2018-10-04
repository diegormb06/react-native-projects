import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image, 
  TouchableOpacity 
} from 'react-native';
const add = require('../images/add.png')

const AddSerieCard = ({ index, onNavigate }) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[styles.container, index % 2 === 0 ? styles.cardLeft : styles.cardRight ]}
  >
    <View style={styles.card}>
      <Image source={add} aspectRatio={1} style={styles.imgAdd} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    height: Dimensions.get('window').width / 2,
    justifyContent: 'center'
  },
  cardLeft: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  cardRight: {
    paddingRight: 10
  },
  imgAdd: {
    alignSelf: 'center',
    width: '90%',
    height: '90%'
  }
})

export default AddSerieCard;
