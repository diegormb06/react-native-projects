import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', result: '' };
  } 

  jokenpo(escolha) {
    let escolhaPc = Math.round(Math.random() * 2);
    let gameResult;

    switch (escolhaPc) {
      case 0:
        escolhaPc = 'pedra';
        if (escolha === 'papel') {
          gameResult = 'Você Ganhou';
        } else if (escolha === 'pedra') {
          gameResult = 'O Jogo empatou';
        } else {
          gameResult = 'Você perdeu';
        }
        break;

      case 1:
        escolhaPc = 'papel';   
        if (escolha === 'tesoura') {
          gameResult = 'Você Ganhou';
        } else if (escolha === 'papel') {
          gameResult = 'O Jogo empatou';
        } else {
          gameResult = 'Você perdeu';
        }
        break;
    
      default:
        escolhaPc = 'tesoura';
        if (escolha === 'pedra') {
          gameResult = 'Você Ganhou';
        } else if (escolha === 'tesoura') {
          gameResult = 'O Jogo empatou';
        } else {
          gameResult = 'Você perdeu';
        }
        break;
    }

    this.setState({ 
                    escolhaUsuario: escolha,
                    escolhaComputador: escolhaPc,
                    result: gameResult
                  });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.containerButton}>
          <View style={styles.chooseButtons}>
            <Button title='Pedra' onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View style={styles.chooseButtons}>
            <Button title='Papel' onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View style={styles.chooseButtons}>
            <Button title='Tesoura' onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>
        
        <View style={styles.gameStage}>
          <Text style={styles.result}>{this.state.result}</Text>
          <Icone choose={this.state.escolhaUsuario} player='User' />
          <Icone choose={this.state.escolhaComputador} player='Computer' />
        </View>
      </View>
    );
  }
}

class Icone extends Component {

  render() {
    if (this.props.choose === 'pedra') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('./img/pedra.png')} />
        </View>
      );
    } else if (this.props.choose === 'papel') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('./img/papel.png')} />
        </View>
      );
    } else if (this.props.choose === 'tesoura') {
      return (
        <View>
          <Text>{this.props.player}</Text>
          <Image source={require('./img/tesoura.png')} />
        </View>
      );
    } else {
      return false;
    }
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={require('./img/jokenpo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  chooseButtons: {
    width: 90
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  gameStage: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  result: {
    color: 'red',
    fontSize: 30,
    fontWeight: '600',
    height: 40
  }
});
