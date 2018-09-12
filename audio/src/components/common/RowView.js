//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { MediaCard, CardSection, Label } from '.';
import { Actions } from 'react-native-router-flux';

// create a component
class RowView extends Component {
    onPressButton() {
        const selectedRow = this.props.rowItem;
        return Actions.testView({ selectedRow });
    }
    render() {
        return (
            <TouchableOpacity
                onPress={this.onPressButton.bind(this)}
            >   
                <CardSection>
                    <Label>{this.props.rowItem}</Label>
                </CardSection>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export { RowView };
