/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AppContainer from './src/screens/AppContainer';



export default class App extends Component{

  

  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
