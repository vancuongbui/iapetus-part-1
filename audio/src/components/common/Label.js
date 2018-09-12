import React from 'react';
import { View, Text, } from 'react-native';

const Label = (props) => {
    // purpose of the lable here is to reuse this component, rename it for purposes
    return (
        <View>
            <Text style={[styles.label, props.style]} >{props.children}</Text>
        </View>
    );
};
// for styles
const styles = {
    label: {
        fontSize: 20,
        paddingBottom: 10,
        paddingLeft: 7,
        // fontWeight: 'bold',
    }
};

export { Label };
