import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Shows from './Shows';
import ProfileHeader from './ProfileHeader';
import { ScrollView } from 'react-native-gesture-handler';


export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ProfileHeader/>
                <ScrollView>
                <Shows />
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11dd1f',
    },
});