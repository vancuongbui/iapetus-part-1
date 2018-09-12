//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MediaBar } from '../common';
// create a component
const Controls = ({
    // paused,
    // shuffleOn,
    // repeatOn,
    onPressPlay,
    onPressPause,
    onBack,
    onForward,
    onPressShuffle,
    onPressRepeat,
    // forwardDisabled,
}) => {
    return (
        <View style={styles.container}>
            <MediaBar 
                onPressShuffle={onPressShuffle}
                onPressBackward={onBack}
                onPressForward={onForward}
                onPressPause={onPressPause}
                onPressPlay={onPressPlay}
                onPressStop={onPressRepeat}
            />
            {/* <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
                <Icon name='backward' color='#FFFFFF' size={30} />
            </TouchableOpacity>
            <View style={{width: 40}} />
            <TouchableOpacity onPress={onBack}>
                <Icon name='backward' color='#FFFFFF' size={30} />
            </TouchableOpacity>
            <View style={{width: 20}} />
            {!paused ?
            <TouchableOpacity onPress={onPressPause}>
                <View style={styles.playButton}>
                    <Icon name='pause' color='#FFFFFF' size={30} />
                </View>
            </TouchableOpacity> :
            <TouchableOpacity onPress={onPressPlay}>
                <View style={styles.playButton}>
                    <Icon name='play' color='#FFFFFF' size={30} />
                </View>
            </TouchableOpacity>
            }
            <View style={{width: 20}} />
            <TouchableOpacity onPress={onForward}
            disabled={forwardDisabled}>
                <Icon name='forward' color='#FFFFFF' size={30} />
            </TouchableOpacity>
            <View style={{width: 40}} />
            <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
                <Icon name='backward' color='#FFFFFF' size={30} />
            </TouchableOpacity> */}
        </View>
);
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    playButton: {

    }
});

//make this component available to the app
export { Controls };
