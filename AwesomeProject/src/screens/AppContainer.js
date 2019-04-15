import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';






const MainNavigator = createStackNavigator(
  {
    Home: LoginScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;

