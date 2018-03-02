//Import libraries
import React from 'react';
import { Text, View } from 'react-native';

//make components
const Header = (procs) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
    <Text style={textStyle}>{procs.headerText}</Text>
  </View>);
};
const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2
  }
};

//make the component available for everyone
export {Header};
