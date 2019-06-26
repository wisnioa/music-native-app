import React, { Component } from 'react';
import {
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Query } from 'react-apollo';
//import gql from graphql-tag for making queries to our graphql server.
import gql from 'graphql-tag';

//Define your query variable which is the query responsible for retrieving data.
//It will query the each player's position, name, team, jersyNumber, and wonSuperBowl from the query's players field.
const query = gql`
        query {
             shows {
                band,
                venue,
                date
            }
        }
`;


export default class Shows extends Component {

    renderShow({ show }) {
        return (
            <TouchableOpacity style={styles.list}>
                <Text style={styles.text}>{show.band}</Text>
                <Text style={styles.text}>{show.venue}</Text>
                <Text style={styles.text}>{show.date}</Text>

            </TouchableOpacity>
        );
    }


render() {
    return (
        <ScrollView style={styles.container}>
            <Text>Shows near you!</Text>
            <Query query={query}>

            {(response, error) => {
                        if(error) {
                            console.log('Response Error-------', error);
                            return <Text style={styles.errorText}>{error}</Text>
                        }
                        //If the response is done, then will return the FlatList
                        if(response) {
                            console.log('response-data-------------', response);
                            //Return the FlatList if there is not an error.
                            return <FlatList 
                                        data={response.data.shows}
                                        renderItem={(show) => this.renderShow(show)}
                                    />;
                        } 
                    }}




            </Query>

           

        </ScrollView>
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