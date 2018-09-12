//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
// import firebase
import firebase from '@firebase/app';
import '@firebase/auth';

import { Card, CardSection, Button, Input, Spinner, } from './common';
// create a component
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '', error: '', loading: false };
    }
    // create the function onButtonPress
    onButtonPress() {
        const { email, password } = this.state; //just short-hand to refer to this.state.email/password
        // first of all, set the state into null to reset it everytime user try to press the button
        this.setState({ error: '', loading: true });
        // The following code is to try to authenticate user, if fail with catch 
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))   //bind(this) mean we will call it sometime in the future
        .catch(() => {
            //if authentication fail, then try to create new accoutn
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))   //successfully created account
            .catch(() => {
                //if this is also fail, then update this.state
                this.setState(this.onLoginFail.bind(this));
            });
        });
    }
    // Handle if login success
    onLoginSuccess() {
        //update state
        this.setState({
            // clean up field of email and pass
            email: '',
            password: '',
            loading: false,
            error: '',
        });
    }
    // onLoginFail handle
    onLoginFail() {
        this.setState({
            error: 'Authentication failed',
            loading: false
        });
    }
    // create a function to handle login with spinning symbol
    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        return (
                <Button                         
                    onPress={this.onButtonPress.bind(this)} //callback syntax
                >Login</Button>
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Card>
                <CardSection>
                    <Input 
                        // get the value of the text input
                        value={this.state.email}                     
                        onChangeText={email => this.setState({ email })}                       
                        label="Login Email"
                        placeHolder="example@youremail.com"
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        // get the value of the text input
                        value={this.state.password}                     
                        onChangeText={password => this.setState({ password })}                       
                        label="Password"
                        placeHolder="*********************"
                        // make the inputing password sured, or hidden
                        secureTextEntry
                    />
                </CardSection>

                    {/* To show the error message if authenticatin fail */}
                    <Text style={styles.error} >{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                    <Button style={styles.registerButton}>Register</Button>
                </CardSection>
            </Card>
            </View>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      paddingTop: 150,
      height: 500,
    },
    loginButton: {
        backgroundColor: '#1a1a1a',
    },
    registerButton: {
        backgroundColor: '#c83349',
        color: '#565656',
    },
    error: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
    }
});

//make this component available to the app
export default LoginForm;
