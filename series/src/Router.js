import { createStackNavigator } from 'react-navigation';

import Login from './scenes/Login'
import ListaSeries from './scenes/ListaSeries';
import SerieDetailPage from './scenes/SerieDetailPage';

const Router = createStackNavigator(
  {
    ListaSeries: ListaSeries,
    Home: Login,
    SerieDetail: SerieDetailPage
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
