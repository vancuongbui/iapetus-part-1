//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';   //a middleware, therefoere need to use with applyMiddleware
// import firebase
import reducers from '../reducers';
import Main from './Main';
// import reducers from folder reducers


// create a component
class App extends Component {     
    
    render() {
        // to disable some of the yellow warning
        // console.ignoredYellowBox = ['Warning: isMounted', 'Warning: Failed', 'warning: Setting'];
        
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (            
            <Provider store={store}>
                <View style={styles.container}>                      
                    <Main />       
                </View>  
            </Provider>                    
        );
    }     
        
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // backgroundColor: '#111111',
    }
});

//make this component available to the app
export default App;
