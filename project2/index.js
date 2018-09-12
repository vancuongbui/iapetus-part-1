/** @format */
// Index.oss.is - place the code here for iso

// First step - import libaries
import React from 'react';
import { Text, AppRegistry, View, StyleSheet, ScrollView, } from 'react-native';
// import components
import HeaderCustom from './src/components/HeaderCustom';
//import AlbumList from './src/components/AlbumList';
import PoemCard from './src/components/PoemCard';

// Second step - Create a component
const App = () => {
    return (
        <ScrollView style={styles.container} >
            <HeaderCustom heading='IAPETUS ITALIAN' ></HeaderCustom>
            <PoemCard></PoemCard>
            <Text>Just an example of React-native</Text>
        </ScrollView>
        
    );
};

//Final Step - Render it to the device, 
AppRegistry.registerComponent('project2', () => App);
// The above command is to register at least 1 component, project2, then return the App component

// Styles go here
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',       
    },
});