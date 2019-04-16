import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';



export default class Shows extends Component {

    render() {
        return (
            <View style={styles.container}>
                
                    <View style={styles.list}>
                        <View>
                            <Text style={styles.text}>Band</Text>
                            <Text style={styles.text}>Venue</Text>
                            <Text style={styles.text}>Date</Text>
                        </View>

                        <View>
                            <Text style={styles.text}>Band</Text>
                            <Text style={styles.text}>Venue</Text>
                            <Text style={styles.text}>Date</Text>
                        </View>
                        <View>
                            <Text style={styles.text}>Band</Text>
                            <Text style={styles.text}>Venue</Text>
                            <Text style={styles.text}>Date</Text>
                        </View>
                       
                    </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,

    },
    text: {
        fontSize: 20,
        color: '#ffffff',
        margin: 10
    },
    list: {
        backgroundColor: '#000000',
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
});