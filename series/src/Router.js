import { createStackNavigator } from 'react-navigation';

import Login from './scenes/Login'
import ListaSeries from './scenes/ListaSeries';
import SerieDetailPage from './scenes/SerieDetailPage';
import AddSerieForm from './scenes/AddSerieForm';

const Router = createStackNavigator(
  {
    AddSerieForm: {
      screen: AddSerieForm,
      navigationOptions: {
        title: 'Cadastrar nova série'
      }
    },
    ListaSeries: ListaSeries,
    Home: Login,
    SerieDetailPage: { 
      screen: SerieDetailPage,
      navigationOptions: ({ navigation }) => {
        return { title: navigation.state.params.serie.title }
      }
    },
  },
  {
    navigationOptions: {
      title: 'Series',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default Router;
