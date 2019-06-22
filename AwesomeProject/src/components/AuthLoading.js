import React, {Component} from 'react';
import {
  ActivityIndicator,
  // AsyncStorage,
  StatusBar,
//   StyleSheet,
Text,
  View,
} from 'react-native';
import GetTokens from '../../spotify/GetTokens';

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    // this.loadingAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  // loadingAsync = () => {
    
  //   const userToken = GetTokens();

  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   this.props.navigation.navigate(userToken ? 'Authloading' : 'App');
  // };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        {/* <ActivityIndicator /> */}
        {/* <StatusBar barStyle="default" /> */}
        
          <Text>I am loading</Text>
        
      </View>
    );
  }
}

