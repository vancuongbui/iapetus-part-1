//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardSection, } from '.';

// create a component
class MediaBar extends Component {
    render() {
        const { onPressShuffle,
                onPressBackward,
                onPressForward,
                onPressPause,
                onPressPlay,
                onPressStop
                //onPressRecord
        } = this.props
        return (
            <View style={styles.conatainer}>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressShuffle}>
                    <Icon name='fast-backward' color='#FFFFFF' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressBackward} >
                    <Icon name='backward' color='#FFFFFF' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressForward} >
                    <Icon name='forward' color='#FFFFFF' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressPause} >
                    <Icon name='pause' color='#FFFFFF' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressPlay} >
                    <Icon name='play' color='#FFFFFF' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle} onPress={onPressStop}>
                    <Icon name='stop' color='#FFFFFF' size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonStyle}>
                    <Icon name='microphone' color='#c83349' size={30} />
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    conatainer: {
        flexDirection: 'row',
        backgroundColor: '#111111',
        justifyContent: 'space-around',
        height: 80,
        paddingLeft: 10,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
    }
});
//make this component available to the app
export { MediaBar };
