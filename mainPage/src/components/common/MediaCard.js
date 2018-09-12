//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

// create a component
const MediaCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../../static/images/Dante-4.jpg')}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleStyle}>{props.title}</Text>
                <Text style={styles.textStyle}>{props.description}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
    },
    imageContainer: {
        flex: 1,
        height: 120,
        alignContent: 'stretch',
        backgroundColor: '#111111',
        marginRight: 10,
    },
    textContainer: {
        flex: 2,
        flexDirection: 'column',
        height: 120,
        backgroundColor: '#FFFFFF',
        paddingRight: 15,
    },
    imageStyle: {    
        //width: '95%',
        margin: 1,   
        marginRight: 10, 
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    textStyle: {
        fontSize: 18,
    }
});

//make this component available to the app
export { MediaCard };
