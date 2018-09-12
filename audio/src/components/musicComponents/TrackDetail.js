//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Label } from '../common';

// create a component
const TrackDetail = ({ title, artist, onAddpress, onMorePress, onTitlePress, onArtistPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageStyle}>
                <Icon name='play' color='#FFFFFF' size={30} />
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.textStyle}>
                    <Label onPress={onTitlePress} >{title}</Label>
                    <Label onPress={onArtistPress} >{artist}</Label>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.iconStyle}>
                <Icon name='music' color='#FFFFFF' size={30} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-around',
        backgroundColor: '#232323',
    },
    imageStyle: {
        flex: 1,
    },
    textStyle: {
        flex: 1,
        flexDirection: 'row',
    },
    iconStyle: {
        flex: 1,
    }
});

//make this component available to the app
export { TrackDetail };
