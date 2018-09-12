//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';

// create a component
const AlbumMusic = ({ url, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image 
                    style={styles.imageStyle}
                    source={url}
                />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    imageStyle: {
        flex: 1,
    }
});

//make this component available to the app
export { AlbumMusic };
