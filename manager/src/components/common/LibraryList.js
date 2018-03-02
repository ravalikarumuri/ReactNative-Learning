import React,{ Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component{
  render(){
    return();
    console.log(this.props);
  }
}
const mapToStateProps = state =>{
  return {libraries: state.libraries };
}
export default connect()(LibraryList);
