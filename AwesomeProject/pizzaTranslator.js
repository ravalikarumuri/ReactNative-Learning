import React from 'react';
import { AppRegistry, View, Text, TextInput,Component } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor props{
    super(props);
    this.state={text:''};
  }
  render(){
    return(
      <View>
      <TextInput onChangeText={(text) => this.setState({text})} />
      <Text> {this.state.text.split('').map((word) => word && '****').join('')}</Text>
      </View>
    );
  }

}
AppRegistry.registerComponent('AwesomeProject',()=> PizzaTranslator)
