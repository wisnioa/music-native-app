import React, { Component } from 'react';


export default class Auth extends Component {

    render(){
        return(
            <View>
            {!!state.accessToken ? (
                <Form>
                  <Form.Label>accessToken</Form.Label>
                  <Form.Value>{state.accessToken}</Form.Value>
                  <Form.Label>accessTokenExpirationDate</Form.Label>
                  <Form.Value>{state.accessTokenExpirationDate}</Form.Value>
                  <Form.Label>refreshToken</Form.Label>
                  <Form.Value>{state.refreshToken}</Form.Value>
                  <Form.Label>scopes</Form.Label>
                  <Form.Value>{state.scopes.join(', ')}</Form.Value>
                </Form>
              ) : (
                  <Heading>{state.hasLoggedInOnce ? 'Goodbye.' : 'Hello, stranger.'}</Heading>
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