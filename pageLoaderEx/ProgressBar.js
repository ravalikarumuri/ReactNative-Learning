import React,{Component} from 'react';
import {View} from 'react-native';
import ProgressBar from 'react-native-progress-bar';

 class Progress extends Component{
   state = {progess:0}
   render() {
     setTimeout((function() {
       this.setState({ progress: this.state.progress + (0.4 * Math.random())});
     }).bind(this), 1000);
   return(
     <View>
       <ProgressBar progress={this.state.progress}/>
      </View>);


   const styles={
     progressBarStyle:{
       fillStyle:{},
       backgroundColor:'#cccccc',
      borderRadius: 2,
      marginTop: 10,
      width: 300
     }
   }
 }
