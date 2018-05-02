import { React } from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  const numeroAleatorio = Math.round(Math.random() * 10);
  alert(numeroAleatorio);
};

const App = () => 
(
  <View>
    <Text>Gerar um número Randomico</Text>
      <Button 
        title="Gerar um número" 
        onPress={geraNumeroAleatorio}
      />
  </View>
);

AppRegistry.registerComponent('number', () => App);
