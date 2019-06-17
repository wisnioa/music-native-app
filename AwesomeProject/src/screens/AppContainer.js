import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import AuthScreen from './AuthScreen';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: ProfileScreen});
const AuthStack = createStackNavigator({ SignIn: LoginScreen });



const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

export default AppContainer;


// const MainNavigator = createStackNavigator(
//   {
//     Home: LoginScreen,
//     Profile: ProfileScreen,
//     Auth: AuthScreen,
  
//   },
//   {
//     initialRouteName: "Home",
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#11dd1f',
//     },
//   }
// }
// );

// const AppContainer = createAppContainer(MainNavigator);
// export default AppContainer;

