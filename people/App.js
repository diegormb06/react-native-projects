import { createStackNavigator } from 'react-navigation';
import { capitalizeFirstLetter } from './src/helpers'

import Main from './src/scenes/Main'
import PeopleDetail from './src/scenes/PeopleDetail'

export default createStackNavigator(
  {
    'Main': {
      screen: Main
    },
    'PeopleDetail': {
      screen: PeopleDetail,
      navigationOptions: ({ navigation }) => {
        const detailsPeople = capitalizeFirstLetter(navigation.state.params.people.name.first);
        return ({
          title: detailsPeople,
          headerTitleStyle: {
            textAlign: 'left',
            flexGrow: 1
          }
        })
      }
    }
  },
  {
    navigationOptions: {
      title: 'Peoples',
      headerStyle: {
        backgroundColor: '#6ca2f7'
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        flexGrow: 1
      }
    }
  }
)
