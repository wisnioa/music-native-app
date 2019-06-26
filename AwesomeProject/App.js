import React, { Component } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import AppContainer from './src/screens/AppContainer';

import { Platform } from 'react-native';
//import your ApolloProvider from react-apollo to wrap your app.
import { ApolloProvider } from 'react-apollo';
//import ApolloClient, InMemoryCache, and HttpLink to define your client to cnnect to your graphql server.//#endregion
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';

const host = Platform.OS === 'ios' ? 'http://localhost:4000/graphql' : 'http://10.0.2.2:4000/graphql';
//Define your client for your APolloProvider connecting to your graphql server.
const client = new ApolloClient({
  //Assign to your cache property a instance of a InMemoryCache
  cache: new InMemoryCache(),
  //Assign your link with a new instance of a HttpLink linking to your graphql server.
  link: new HttpLink({
    uri: host
  })
})


type Props = {};

export default class App extends Component<Props>  {

  render() {
    return (
      <View style={styles.container}>
        <ApolloProvider client={client}>
          <AppContainer />
        </ApolloProvider>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
