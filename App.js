import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultItemScreen from './src/screens/ResultItemScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultItem: ResultItemScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search'
    }
  }
);

export default createAppContainer(navigator);