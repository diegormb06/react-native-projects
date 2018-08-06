import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Button, 
  ActivityIndicator,
  Alert
} from 'react-native';
import firebase from "firebase";
import FormRow from '../components/FormRow';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { login: '', password: '', isLoading: false, message: '' };
  }

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDO2oPkSk17XflGS1ZloL3kSCMb8ID3vwY",
      authDomain: "series-ca091.firebaseapp.com",
      databaseURL: "https://series-ca091.firebaseio.com",
      projectId: "series-ca091",
      storageBucket: "series-ca091.appspot.com",
      messagingSenderId: "14405007083"
    };
    firebase.initializeApp(config);
  }

  tryLogin() {
    this.setState({isLoading: true});
    const { login, password } = this.state;
    
    firebase.auth().signInWithEmailAndPassword(login, password)
      .then(response => {
        this.setState({ message: 'logado com sucesso' });
        this.props.navigation.navigate('ListaSeries')
      })
      .catch(error => {
        if ( error.code === 'auth/user-not-found' ) {
          Alert.alert(
            'Usuário não cadastrado', 
            'Deseja cadastrar novo usuário?',
            [
              { text: 'não' },
              { text: 'Sim', onPress: () => this.addNewUser(login, password) }
            ],
            { cancelable: false }
          );
        }

        this.setState({ message: error.message })
      })
      .then(() => this.setState({isLoading: false}))
  }

  addNewUser(login, password) {
    firebase.auth().createUserWithEmailAndPassword(login, password)
    .then(user => {
      this.setState({ message: 'Usuário criado com sucesso!' })
    })
    .catch(error => {
      this.setState({ message: error.message })
    })
  }

  renderButtonLogin() {
    if (this.state.isLoading)
      return <ActivityIndicator size='large' />

    return <Button title='Log in' onPress={() => this.tryLogin()} />
  }

  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            placeholder='Email'
            style={styles.input}
            value={this.state.login}
            onChangeText={login => this.setState({ login })}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.input}
            placeholder='senha'
            value={this.state.senha}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </FormRow>
        <Text>{this.state.message}</Text>
        { this.renderButtonLogin() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    fontSize: 16
  }
})
