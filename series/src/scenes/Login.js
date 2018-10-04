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
import { connect } from "react-redux";
import { loginUserSuccess } from "../actions";
import FormRow from '../components/FormRow';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', isLoading: false, message: '' };
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

  userLogin() {
    this.setState({ isLoading: true });
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.props.navigation.replace('ListaSeries')
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Alert.alert(
            'Usuário não cadastrado',
            'Deseja cadastrar novo usuário?',
            [
              { text: 'não', onPress: () => this.setState({ message: '', isLoading: false }) },
              { text: 'Sim', onPress: () => this.addNewUser(email, password) }
            ],
            { cancelable: false }
          );
        }
        this.setState({ message: error.message })
      })
  }

  addNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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

    return <Button title='Log in' onPress={() => this.userLogin()} />
  }

  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            placeholder='Email'
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
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

export default connect(null, { loginUserSuccess })(Login)
