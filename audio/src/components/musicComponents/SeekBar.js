//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider } from 'react-native';
import { Label } from '../common';

// import slideer
// var Slider = require('react-native-slider');

// create pad function
function pad(n, width) {
    n = n + '';
    return n.length >= width ? n: new Array(width - n.length + 1).join('0') + n;
}

// another method
const minuteAndSeconds = ({ position }) => ([
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2),
]);

// create a component
const SeekBar = ({ trackLength, currentPosition, onSeek }) => {
    const elapsed = minuteAndSeconds(currentPosition);
    const remaining = minuteAndSeconds(trackLength - currentPosition);

    return (
        <View style={styles.container}>
            <View style={styles.labelStyle}>
                <Label>{elapsed[0] + ':' + elapsed[1]}</Label>
            
                <Label>{trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}</Label>
            </View>
            <Slider 
                maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                onSlidingComplete={onSeek}
                value={currentPosition}
                style={styles.slider}
                minimumTrackTintColor='#FFFFFF'
                maximumTrackTintColor='#333333'
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: 60,
    },
    labelStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    slider: {
        marginTop: -12,
    },
    // track: {
    //     height: 2,
    //     borderRadius: 1,
    // },
    // thumb: {
    //     width: 10,
    //     height: 10,
    //     borderRadius: 5,
    //     backgroundColor: '#FFFFFF',
    // }
});

//make this component available to the app
export { SeekBar };
