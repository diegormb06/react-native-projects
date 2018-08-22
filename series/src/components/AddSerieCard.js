import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image, 
  TouchableOpacity 
} from 'react-native';

const AddSerieCard = ({ index, onNavigate }) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[styles.container, index % 2 === 0 ? styles.cardLeft : styles.cardRight ]}
  >
    <View style={styles.card}>
      {/* <Image source={{ uri: serie.img }} aspectRatio={1} resizeMode='stretch' /> */}
      <Text style={styles.cardTitle}>Add Série</Text>
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
    height: Dimensions.get('window').width / 2
  },
  cardLeft: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10
  },
  cardRight: {
    paddingRight: 10
  }
})

export default AddSerieCard;
