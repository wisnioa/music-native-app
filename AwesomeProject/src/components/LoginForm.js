import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';

type Props = {};
class Login extends Component<Props> {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                   <Text style={styles.appName}>Spotishow</Text>
                </View>

                <View style={styles.formContainer}>
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='#000000' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Password'
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholderTextColor='#000000'
                        secureTextEntry />

                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => navigate('AuthLoading') }
                    
                    >
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

export default withNavigation(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11dd1f',
    },
    appName: {
        fontWeight:'bold',
        fontSize:30,
        color: '#000000'
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
    input:{
        height: 50,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000000'
    },
    buttonContainer:{
        backgroundColor: '#000000',
        paddingVertical: 15,
        
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
   
});


