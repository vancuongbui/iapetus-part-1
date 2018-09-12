//import liraries
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Label, CardSection, Card, } from './';

// create a component
class Footer extends Component {
    render() {
        return (
            <View style={styles.container} >
                <CardSection style={styles.cardSection}>
                    <Label style={styles.label}>Faculty of Health, Arts and Design</Label>
                </CardSection>
                <CardSection style={[styles.cardSection, { backgroundColor: '#c83349' }]}>
                    <Label style={styles.label}>Swinburne University of Technology</Label>
                </CardSection>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'column',
        backgroundColor: '#111111',
        width: '100%',
    },
    label: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
    },    
    cardSection: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#111111',
        height: 30,
    }
});

//make this component available to the app
export { Footer };
