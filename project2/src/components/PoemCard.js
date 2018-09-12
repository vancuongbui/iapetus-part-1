//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ArticleDetail from './ArticleDetail';

// define an api for the poem of Dante
const DANTE = [
    {
        article: 'Article one',
        author: 'Dante',
        image: require('../images/Dante-1.jpg'),
        thumbnail: require('../images/thumbnail-dante.jpg'),
    }, 
    {
        article: 'Article Two',
        author: 'Dante',
        image: require('../images/Dante-2.jpg'),
        thumbnail: require('../images/thumbnail-dante.jpg'),
    }, 
    {
        article: 'Article Three',
        author: 'Dante',
        image: require('../images/Dante-3.jpg'),
        thumbnail: require('../images/thumbnail-dante.jpg'),
    },
    {
        article: 'Article Four',
        author: 'Dante',
        image: require('../images/Dante-4.jpg'),
        thumbnail: require('../images/thumbnail-dante.jpg'),
    },
];

// using API from the web http://rallycoding.herokuapp.com/api/music_albums

// create a component
class PoemCard extends Component {
    constructor(props) {
        super(props);
        this.state = { poems: DANTE };
    }

    renderAlbums() {
        return this.state.poems.map(poem => 
            <ArticleDetail key={poem.article} articleDetail={poem} ></ArticleDetail>
            // the name articleDetail refer to props that will call in the child, ArticleDetail
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderAlbums()}
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
      
    },
});

//make this component available to the app
export default PoemCard;
