import React from 'react';
import { Text, View, TouchableHighlight, TouchableOpacity, } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
        >
            <Text>{ children }</Text>
        </TouchableOpacity>
        
    );
};


export default Button;
