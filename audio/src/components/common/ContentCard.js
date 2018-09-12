//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { CardSection } from './';

// create a component
class ContentCard extends Component {
    
    render() {
        return this.props.content.map((item) => {
            return (
              <CardSection key={item.item}>
                <Text>{item.line}</Text>
              </CardSection>
            );
        });
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
    },
});

//make this component available to the app
export { ContentCard };
