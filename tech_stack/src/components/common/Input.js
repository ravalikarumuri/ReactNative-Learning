import React from 'react';
import {Text, View, TextInput} from 'react-native';

const Input =({label,value,onChangeText,placeholder,secureTextEntry})=>{
  const{inputStyle,labelStyle,containerStyle}= styles;
  return(
    <View style ={containerStyle}>
    <Text style = {labelStyle}>{label}</Text>
    <TextInput secureTextEntry={secureTextEntry}
     autoCorrect={false}
    placeholder={placeholder}
    style={inputStyle}
    value = {value}
    onChangeText ={onChangeText}/>
</View>
  );
}
const styles = {
  inputStyle:{
    color: '#000',
    paddingLeft: 5,
    paddingRight:5,
    fontSize:18,
    flex:2,
    lineHeight:23
  },
  labelStyle:{
    flex:1,
    fontSize:18,
    paddingLeft:20
  },
  containerStyle:{
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    height: 40
  }
};
export {Input};
