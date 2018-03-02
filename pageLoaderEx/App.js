import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

export default class App extends Component<{}> {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View>
        <SearchInput
          onChangeText={(term) => { this.searchUpdated(term) }}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id}>
                <View>
                <Text>Helloooooooooooooo</Text>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import * as Progress from 'react-native-progress';
//
// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   backgroundColor: '#fff',
//   //   paddingVertical: 20,
//   // },
//   // welcome: {
//   //   fontSize: 20,
//   //   textAlign: 'center',
//   //   margin: 10,
//   // },
//   progress: {
//     margin: 10,
//   }
// });
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       progress: 0,
//       indeterminate: true,
//     };
//   }
//
//   componentDidMount() {
//     this.animate();
//   }
//
//   animate() {
//     let progress = 0;
//     this.setState({ progress });
//     setTimeout(() => {
//       this.setState({ indeterminate: false });
//       setInterval(() => {
//         progress += Math.random() / 5;
//         if (progress > 1) {
//           progress = 1;
//         }
//         this.setState({ progress });
//       }, 500);
//     }, 1500);
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!!!!!!!!!!!!!!!!!!!!!1
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//         <Progress.Bar
//             style={styles.progress}
//             progress={this.state.progress}
//             indeterminate={this.state.indeterminate}
//           />
//       </View>
//     );
//   }
// }
