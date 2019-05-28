import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Colors } from '../Themes'

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
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: Colors.primaryColorText,
      headerBackTitle: null,
    },
  }
);

const AppNavigation = createAppContainer(rootNavigation);

export default AppNavigation;
