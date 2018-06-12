import React from "react";
import { View, Text, StatusBar, Image, StyleSheet } from "react-native";
import { TabBar } from "react-native-tab-view";

const addUserImg = require('../img/adicionar-contato.png')

export default props => (
  <View style={{ backgroundColor: '#115E54', elevation: 4 }}>
    <StatusBar backgroundColor='#114D44' />
    
    <View style={styles.headerContainer}>
      <Text style={{color: '#fff', fontSize:20}}>Prime Zap</Text>

      <View style={{flexDirection: 'row'}}>
        <Image source={addUserImg} style={{marginRight: 20}}/>
        <Text style={{color: '#fff', fontSize: 18}}>Sair</Text>
      </View>
    </View>

    <TabBar {...props} style={{backgroundColor: '#115E54', elevation: 0}} />
  </View>
);


const styles = StyleSheet.create({
  headerContainer: {
    height: 50, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
})
