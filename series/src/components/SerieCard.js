import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import Shimmer from 'react-native-shimmer-placeholder'

const SerieCard = ({ serie, index, onNavigate, visible }) => (
  <TouchableOpacity 
    onPress={onNavigate}
    style={[styles.container, index % 2 === 0 ? styles.cardLeft : styles.cardRight ]}
  >
    <View style={styles.card}>
      <Shimmer autoRun visible={false} style={styles.shimmerPlaceholder}>
        <Image source={{ uri: serie.img }} aspectRatio={1} resizeMode='stretch' />
      </Shimmer>
      <Shimmer autoRun visible={visible} style={styles.shimmerPlaceholder}>
        <View style={styles.cardTitleWrapper}>
          <Text style={styles.cardTitle}>{serie.title}</Text>
        </View>
      </Shimmer>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: '50%',
  },
  shimmerPlaceholder: {
    width: '100%',
    height: Dimensions.get('window').width / 2
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
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

export default SerieCard;
