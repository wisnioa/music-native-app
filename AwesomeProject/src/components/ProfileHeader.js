import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';



export default class ProfileHeader extends Component {

    render() {
        return (
            <View style={styles.container}>
                        <Text style={styles.header}>Welcome, User Name</Text>
                        <Text style={styles.text}>Here are the latest shows near you</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 5,
        color: '#000000'
    },
    text: {
        margin: 10,
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});