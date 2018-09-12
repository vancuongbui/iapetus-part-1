//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers from folder reducers
import reducers from './reducers';
// import common components
import { Header, } from './components/common';
import LibraryList from './components/LibraryList';

// create a component
const App = () => {          
        return (
            <Provider store={createStore(reducers)}>            
                <View style={styles.container}>
                    <Header headerText="IAPETUS" />
                    <LibraryList />

                </View>                
            </Provider>            
        );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        // backgroundColor: '#111111',
    },
    test: {
        color: '#FFFFFF',
    }
});

//make this component available to the app
export default App;
