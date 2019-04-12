/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './src/screens/Login';



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Login />
   </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
