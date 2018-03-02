import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (<Text>Hello {this.props.name}</Text>);
  }
}
 export default class LotsOfgreetings extends Component {
   render() {
     return (
       <View>
     <Greeting name="ravali" />
     <Greeting name="rithwik" />
   </View>);
   }
 }
 AppRegistry.registerComponent('AwesomeProject', () => LotsOfgreetings);
