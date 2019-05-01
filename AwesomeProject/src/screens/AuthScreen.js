import React, { Component } from 'react';
import {View, Button, UIManager} from 'react-native';
import { authorize, refresh, revoke } from 'react-native-app-auth';

const credentials = require('../../credentials');

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

type State = {
  hasLoggedInOnce: boolean,
  accessToken: ?string,
  accessTokenExpirationDate: ?string,
  refreshToken: ?string
};

const config = {
  issuer: 'https://accounts.spotify.com/authorize?',
  clientId: credentials.clientId,
  redirectUrl: credentials.redirectUrl,
  clientSecret: credentials.clientSecret,
  scopes: ['user-library-read','app-remote-control']
};

export default class Auth extends Component <{}, State>{
  
  state = {
    hasLoggedInOnce: false,
    accessToken: '',
    accessTokenExpirationDate: '',
    refreshToken: ''
  };

  
  animateState(nextState: $Shape<State>, delay: number = 0) {
    setTimeout(() => {
      this.setState(() => {
        LayoutAnimation.easeInEaseOut();
        return nextState;
      });
    }, delay);
  }

  authorize = async () => {
    try {
      const authState = await authorize(config);

      this.animateState(
        {
          hasLoggedInOnce: true,
          accessToken: authState.accessToken,
          accessTokenExpirationDate: authState.accessTokenExpirationDate,
          refreshToken: authState.refreshToken,
          scopes: authState.scopes
        },
        500
      );
    } catch (error) {
      Alert.alert('Failed to log in', error.message);
    }
  };

  refresh = async () => {
    try {
      const authState = await refresh(config, {
        refreshToken: this.state.refreshToken
      });

      this.animateState({
        accessToken: authState.accessToken || this.state.accessToken,
        accessTokenExpirationDate:
          authState.accessTokenExpirationDate || this.state.accessTokenExpirationDate,
        refreshToken: authState.refreshToken || this.state.refreshToken
      });
    } catch (error) {
      Alert.alert('Failed to refresh token', error.message);
    }
  };

  revoke = async () => {
    try {
      await revoke(config, {
        tokenToRevoke: this.state.accessToken,
        sendClientId: true
      });
      this.animateState({
        accessToken: '',
        accessTokenExpirationDate: '',
        refreshToken: ''
      });
    } catch (error) {
      Alert.alert('Failed to revoke token', error.message);
    }
  };

    render(){
        return(
            <View>
            {!!state.accessToken ? (
                <View>
                  <Text>accessToken</Text>
                  <Text>{state.accessToken}</Text>
                  <Text>accessTokenExpirationDate</Text>
                  <Text>{state.accessTokenExpirationDate}</Text>
                  <Text>refreshToken</Text>
                  <Text>{state.refreshToken}</Text>
                  <Text>scopes</Text>
                  <Text>{state.scopes.join(', ')}</Text>
                </View>
              ) : (
                  <Text>{state.hasLoggedInOnce ? 'Goodbye.' : 'Hello, stranger.'}</Text>
                )}
      
              <View>
                {!state.accessToken ? (
                  <Button onPress={this.authorize} text="Authorize" color="#DA2536" />
                ) : null}
                {!!state.refreshToken ? (
                  <Button onPress={this.refresh} text="Refresh" color="#24C2CB" />
                ) : null}
                {!!state.accessToken ? (
                  <Button onPress={this.revoke} text="Revoke" color="#EF525B" />
                ) : null}
              </View>
            </View>
        )

    }

}