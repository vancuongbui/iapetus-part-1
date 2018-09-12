//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, } from 'react-native';
// import connect from react-redux to user action creator
import { connect } from 'react-redux';
import { MediaCard, ContentCard, } from './common';
import * as actions from '../actions';

// create a component
class ListItem extends Component {
    // create a method to render content
    renderContent() {
        const { title, content, description } = this.props.library;
        if (this.props.expanded) {
            return (
                <ContentCard 
                    content={content}
                >
                </ContentCard>
            );    
        }
        return (
            <MediaCard
                title={title}
                description={description}
            >
            </MediaCard>
        );
    }
    
    render() {
        // define a short-hand for this.props.children
        const { id } = this.props.library;
        return (
            <TouchableOpacity
                onPress={() => this.props.selectLibrary(id)}
                // Note that, selectLibrary(id) come from action
            >
                <View>
                    
                    <View>
                        {this.renderContent()}
                    </View>
                </View>
            </TouchableOpacity>           
        );
    }
}

// define your styles

//make this component available to the app
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };    //return { expanded: expanded }
    // selectedLibraryId from the return of the index inside reducers
};
// connect(function) to 
//connect(ListItem) is to map connect helper with this componnent
export default connect(mapStateToProps, actions)(ListItem);
