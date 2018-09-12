//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, Linking, } from 'react-native';
//import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// create a component
const ArticleDetail = (props) => {
    // The props here refer to ther parent, poems
    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        source={props.articleDetail.thumbnail}
                        style={styles.image}
                    />
                </View>
                <View style={styles.textheading}>
                    <Text> {props.articleDetail.article} </Text>
                    <Text> {props.articleDetail.author} </Text>
                </View>               
            </CardSection>  
            <CardSection>                
                <ImageBackground 
                    source={props.articleDetail.image}
                    style={styles.imagebackgroud}
                >
                    <Text style={styles.textcontent} >This is the sentence number one of the article</Text>
                </ImageBackground>               
            </CardSection>
            <CardSection>
                <Button 
                    onPress={() => Linking.openURL('https://facebook.github.io/react-native/docs/linking')}
                >
                    Click me please
                </Button>
            </CardSection>

        </Card>
    );
};

// define your styles
const styles = {
    textheading: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10,
    },
    image: {
        height: 50,
        width: 50,
    },
    imagebackgroud: {
        height: 200,
        flex: 1,
        width: null,
        backgroundColor: '#000000',
    },
    textcontent: {
        fontSize: 25,
        color: '#FFFFFF',        
    }
};

//make this component available to the app
export default ArticleDetail;
