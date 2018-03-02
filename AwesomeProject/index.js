import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// Creating a component
const App = () => (
  <View style={{ flex: 1 }}>
  <Header headerText={'Albumsss'} />
  <AlbumList />
  </View>
);
//rendering it to screen
AppRegistry.registerComponent('AwesomeProject', () => App);
