//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Button } from './common';


// create a component
class LogoutForm extends Component {
    // construct a state
    constructor(props) {
        super(props);
        this.state = { loggedIn: true };
    }
    
    render() {
        return (
            <View style={styles.container}>                
                <Button
                    onPress={() => {
                        //signout from firebase server 
                        firebase.auth().signOut();
                        //then, set state of login to false.
                        this.setState({ loggedIn: false }); 
                        }}
                >Logout</Button>                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingTop: 100,    
        height: 140,
        // backgroundColor: '#4a4444',   
    },
});

//make this component available to the app
export default LogoutForm;

