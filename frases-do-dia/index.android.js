import React, { Component } from 'react';
import { View, AppRegistry, Image, Button } from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const fraseDoDia = function () {
  let frases = [
    'Não importa a cor do céu. Quem faz o dia bonito é você.',
    'Mantenha o foco no objetivo, centralize a força para lutar e utilize a fé para vencer.',
    'Se você acredita que é capaz, ignore a opinião dos outros e siga em frente.',
    'Pra todo game-over existe um play again.',
    'Que todo mal vire amor, que toda dor vire flor.',
    'Imagine uma nova história para sua vida e acredite nela.',
    'Se for pra ser, será. Se tá demorando, é porque o melhor ainda está por vir.',
    'Simplesmente viva a vida!',
    'E que nunca nos falte a esperança de dias melhores.',
    'Aprenda a rir dos seus tropeços.'
  ];

  let index = Math.round( Math.random() * 10 );

  return alert(frases[index])
}

export default class frases_do_dia extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <Image source={require('./imgs/logo.png')} style={{margin:7}} />

        <Button
          onPress={fraseDoDia}
          title="Frase do dia"
          color="#527b1b"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('frases_do_dia', () => frases_do_dia);
