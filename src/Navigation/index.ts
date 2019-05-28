import { createAppContainer, createStackNavigator } from 'react-navigation';

// Screens
import PostsScreen from '../Screens/Posts';
import SinglePostScreen from '../Screens/SinglePost';

const rootNavigation = createStackNavigator(
  {
    Posts: PostsScreen,
    Post: SinglePostScreen,
  },
  {
    initialRouteName: 'Posts',
    defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: Colors.green,
      // },
      // headerTintColor: Colors.snow,
      headerBackTitle: null,
    },
  }
);

const AppNavigation = createAppContainer(rootNavigation);

export default AppNavigation;
