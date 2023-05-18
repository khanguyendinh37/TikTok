import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Camera } from 'react-native-vision-camera'

export default function Videonew() {
    // const devices = useCameraDevices('wide-angle-camera')
    // const device = devices.back
  
    // if (device == null) return <LoadingView />
  return (
    <View style = {styles.content}>
       <Text>New Video</Text>
    </View>
  )
}
const styles = StyleSheet.create({
content:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'
}
});