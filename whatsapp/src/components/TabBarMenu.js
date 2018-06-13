import React from "react";
import { TabBar } from "react-native-tab-view";
import { Actions } from "react-native-router-flux";
import { View, 
  Text, 
  StatusBar, 
  Image, 
  StyleSheet,
  TouchableHighlight
} from "react-native";


const addUserImg = require('../img/adicionar-contato.png')

export default props => (
  <View style={{ backgroundColor: '#115E54', elevation: 4 }}>
    <StatusBar backgroundColor='#114D44' />
    
    <View style={styles.headerContainer}>
      <Text style={{color: '#fff', fontSize:20}}>Prime Zap</Text>

      <View style={{ flexDirection: 'row'}}>
        <TouchableHighlight style={{width: 30}} underlayColor='#066965' onPress={() => Actions.adicionarContato()}>
          <Image source={addUserImg} style={{marginRight: 20}}/>
        </TouchableHighlight>
        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 20}}>Sair</Text>
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
