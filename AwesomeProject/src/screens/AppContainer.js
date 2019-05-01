import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import AuthScreen from './AuthScreen';






const MainNavigator = createStackNavigator(
  {
    Home: LoginScreen,
    Profile: ProfileScreen,
    Auth: AuthScreen,
  },
  {
    initialRouteName: "Home",
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#11dd1f',
    },
  }
}
);

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;

