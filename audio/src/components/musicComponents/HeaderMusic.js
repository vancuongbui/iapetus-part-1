//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Label } from '../common';

// create a component
const HeaderMusic = ({ message, onDownPress, onQueuePress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onDownPress} >
                <Icon name='play' color='#FFFFFF' size={40} />
            </TouchableOpacity>
            <Label style={{ color: '#FFFFFF' }}>{message.toUpperCase()}</Label>
            <TouchableOpacity onPress={onQueuePress} >
                <Icon name='music' color='#FFFFFF' size={40} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#c83349',
        height: 60,
    },
});

//make this component available to the app
export { HeaderMusic };
