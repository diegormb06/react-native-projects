import { createStackNavigator } from 'react-navigation';

import Login from './scenes/Login'
import ListaSeries from './scenes/ListaSeries';
import SerieDetailPage from './scenes/SerieDetailPage';
import AddSeriePage from './scenes/AddSeriePage';

const Router = createStackNavigator(
  {
    Home: Login,
    ListaSeries: ListaSeries,
    SerieDetailPage: { 
      screen: SerieDetailPage,
      navigationOptions: ({ navigation }) => {
        return { title: navigation.state.params.serie.title }
      }
    },
    AddSeriePage: {
      screen: AddSeriePage,
      navigationOptions: {
        title: 'Cadastrar nova série'
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
