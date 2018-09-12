//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, } from 'native-base';

// create a component
class HeaderCustom extends Component {
    
    render() {
        return (
            <Header style={styles.container} >
                <Left>
                    <Button transparent >
                    <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title style={styles.text} >{ this.props.heading }</Title>
                </Body>
                <Right>
                    <Button transparent>
                    <Icon name='search' />
                    </Button>
                </Right>
            </Header>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {   
        flexDirection: 'row',             
        width: '100%',
        backgroundColor: '#1a1a1a',
        height: 60,
        
        // shadow
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
    },
    text: {
        //fontSize: 30,
        color: "#FEFEFE",
    }
});

//make this component available to the app
export default HeaderCustom;
