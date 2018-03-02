import React from 'react';
import { View, Text, Image,Linking } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { thumbnailContainerStyle,
     headerTextStyle,
      thumbnailStyle,
       ViewStyle, imageStyle } = styles;
  return (
<Card>
<CardSection>
<View style={thumbnailContainerStyle} >
<Image
style={thumbnailStyle}
source={{ uri: thumbnail_image }}
/>
</View>
<View style={ViewStyle}>
<Text style={headerTextStyle} >{title}</Text>
<Text>{artist}</Text>
</View>
</CardSection>
<CardSection>
<Image style={imageStyle} source={{ uri: image }} />
</CardSection>
<CardSection><Button onPress={() => Linking.openURL(url)} >Buy Now</Button></CardSection>

</Card>
);
};
const styles = {
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyle:
  {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 30,
    height: 30
  },
ViewStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
