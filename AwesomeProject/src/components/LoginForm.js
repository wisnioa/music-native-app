import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

type Props = {};
export default class Login extends Component<Props> {

    render() {
        return (
            <View>
                <ScrollView style={{ padding: 20 }}>
                    <Text style={styles.loginh1}>
                        Login
                </Text>
                    <TextInput style={styles.text} placeholder='Username' />
                    <TextInput style={styles.text} placeholder='Password' />
                    <View style={{ margin: 7 }} />
                    <Button
                        onPress={this.props.onLoginPress}
                        title="Submit"
                        style={styles.button}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginh1: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        margin: 50

    }

});
