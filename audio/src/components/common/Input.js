import React from 'react';
import { View, Text, StyleSheet, TextInput, } from 'react-native';

const Input = ({ label, value, onChangeText, placeHolder, secureTextEntry }) => {
    // purpose of the lable here is to reuse this component, rename it for purposes
    return (
        <View style={styles.input} >
            <Text style={styles.label} >{label}</Text>
            <TextInput 
                // get the value of the text input
                secureTextEntry={secureTextEntry}
                value={value}                     
                onChangeText={onChangeText}
                style={styles.textInput}
                placeholder={placeHolder}
                clearButtonMode='always'
            />
        </View>
    );
};
// for styles
const styles = {
    textInput: {
        height: 40,
        width: '100%',        
    },
    input: {
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        paddingLeft: 10,
    },
    label: {
        fontSize: 20,
        paddingBottom: 10,
        // fontWeight: 'bold',
    }
};

export { Input };
