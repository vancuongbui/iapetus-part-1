//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, ListView } from 'react-native';
import { connect } from 'react-redux';  //connect used to access to redux-state
import ListItem from './ListItem';
// import MediaCard from './common/MediaCard';
// create a component
class LibraryList extends Component {    
    // renderItem(library) {
    //     return <ListItem library={library} />;
    // }
    componentWillMount() {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(this.props.libraries);
      }
    
      renderRow(library) {
        return <ListItem library={library} />;
      }
    
      render() {
        return (
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        );
      }
    }
// create a function to map the global state (state) to props
// this function is to take the global state object - application state, then provide it as props

const mapStateToProps = state => {
    return { libraries: state.libraries };
    // this object libraries will be come a props of the class LibraryList above and
    //therefore can be access as this.props.libraries
};
// explain the following:
    //call the connect component function from react-redux, return the value
    //then, immediately call the function with the props = LibraryList
export default connect(mapStateToProps)(LibraryList);
