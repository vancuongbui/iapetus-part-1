//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import firebase
import firebase from '@firebase/app';
import '@firebase/auth';
// import short-and from index.js inside common folder
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';


// create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: null };    //null mean the state is unknown
    }
    
    
    // loading the database
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyA8ryJnTd9JUbW12F4d91ZyAQAiWfQRD40',
            authDomain: 'iapetus-auth.firebaseapp.com',
            databaseURL: 'https://iapetus-auth.firebaseio.com',
            projectId: 'iapetus-auth',
            storageBucket: 'iapetus-auth.appspot.com',
            messagingSenderId: '80149794474'
        });
        // Handle the status of login on/off of a given user using onAuthStateChanged()
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }    
    // create a function to display the page with loggedIn condition 
    renderApp() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <LogoutForm></LogoutForm>
                );
            case false:
                return (
                    <LoginForm></LoginForm>
                );
            default: 
                return (
                    <Spinner size='large' ></Spinner>
                );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText="IAPETUS" />
                {this.renderApp()}
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        // backgroundColor: '#c83349',
    },
});

//make this component available to the app
export default App;
