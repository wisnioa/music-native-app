import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';


export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile Components will go here!</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11dd1f',
    },
    text: {
        fontSize: 25
    }
});