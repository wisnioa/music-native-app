import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
      <View style={styles.container}>
        
        <Text style={styles.appName}>Spotishow</Text>
        
        <Text>By clicking OK, you authorize Spotishow to connect to your Spotify account.</Text>
        
        <Text>Spotishow will be able to receive Spotify account data. </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigate('LoginForm')}
            style={styles.buttonCancel}
          >
            <Text
              style={styles.textButton}>Cancel</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Profile')}
            style={styles.ButtonOK}
          >
            <Text
              style={styles.textButton}>OK</Text>
          </TouchableOpacity>
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center'
  },
  appName: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  buttonCancel: {
    backgroundColor: '#000000',
    borderRadius: 30,
    padding: 20,
  },
  ButtonOK: {
    backgroundColor: '#11dd1f',
    borderRadius: 30,
    padding: 20,
   
  },
  textButton: {
    color: '#fff',
    // fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: 30,
    textAlign: 'center'
  }
});