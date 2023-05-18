import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function VideoUser({data}) {
    const { uri, caption, channelName, musicName, likes, comments, avatarUri,follower } =
    data;
  return (
    <View style={styles.Content}>
      <Text style={styles.Text}>Video</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    Content:{
      
      justifyContent:'center',
      alignItems:'center',
      marginBottom:400,
    },
    Text:{
      marginBottom:500,
      fontSize:20,
      
       
    }
})