// Import libraries for making a component
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, backIcon, searchIcon, heading, rightMenu } = styles;

  return (
    <View style={[viewStyle, props.style]}>
      <TouchableOpacity style={backIcon}>
        <Icon
          name={props.iconType}
          color='#FFFFFF'  
          size={30}           
          />
      </TouchableOpacity>
      <View style={heading}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
      
      <TouchableOpacity style={searchIcon}>
        <Icon
          name='search'
          color='#FFFFFF'
          size={30}             
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  viewStyle: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#c83349',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    // paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FEFEFE',
    textAlign: 'center',
  },
  heading: {
    flex: 4,
    justifyContent: 'center',
  },
  backIcon: {
    flex: 1,
    paddingLeft: 10,
  },
  searchIcon: {
    flex: 1,
    paddingRight: 5,
  }
};

// Make the component available to other parts of the app
export { Header };
