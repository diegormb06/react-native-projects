import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image, 
  TouchableOpacity 
} from 'react-native';

const SerieCard = ({ serie, index }) => (
  <TouchableOpacity 
    style={[styles.container, index % 2 === 0 ? styles.cardLeft : styles.cardRight ]}
  >
    <View style={styles.card}>
      <Image source={{ uri: serie.img }} aspectRatio={1} resizeMode='stretch' />
      <View style={styles.cardTitleWrapper}>
        <Text style={styles.cardTitle}>{serie.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default SerieCard;

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFF',
    elevation: 8,
    height: Dimensions.get('window').width / 2
  },
  cardTitleWrapper: {
    backgroundColor: 'black',
    height: 40,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 3,
  },
  cardTitle: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
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
