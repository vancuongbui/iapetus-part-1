//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import axios to fetch data from API
import axios from 'axios';

// create a component
class AlbumList extends Component {
    // Empty state handle
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }

    // create a method to mount data when the app load
    componentWillMount() {        
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        this.state.albums.map(albums => <Text>{albums.title}</Text>);
    }

    render() {
        console.log(this.state);
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
export default AlbumList;
