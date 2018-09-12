//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { testClickingAction } from '../actions';
        

// create a component
class MainPage extends Component {
    constructor(props) {
        super(props);
        // this.state { iconName: this.props.audioLoading() };
    }
    
    onBtnPress() {
        testClickingAction(2);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{this.props.clickNumber}</Text>
                <TouchableOpacity 
                    onPress={this.onBtnPress.bind(this)}
                    style={styles.btnStyle} >
                    <Icon
                        name='play'
                        color='#111111'  
                        size={40}           
                    />
                </TouchableOpacity>
            </View>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
    },
    textStyle: {
        flex: 3
    },
    btnStyle: {
        flex: 1,
    }
});
// map state to props te be used in the component
const mapStateToProps = (state) => {
    const  clickNumber = state.iconName;
    return { clickNumber };
}
//make this component available to the app
export default connect(mapStateToProps, { testClickingAction })(MainPage);
 