import { View, Text,StyleSheet, TouchableOpacity,Image, ScrollView, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import VideoUser from './constants/Video';
import VideoItem from './VideoItem';
import Message from './Inbox';
import 'react-native-gesture-handler'; 
import { createDrawerNavigator } from 'react-native'

import { data} from './constants';


const Tab = createBottomTabNavigator();
const VideoHome =()=>{
  return <VideoUser  data ={data[0]}/>;
}
const VideoLock =()=>{
  return null;
}
const User =()=>{
  return null;
}
const Messager =()=>{
  return null;
}

export default function UserItem({data}) {
  const { uri, caption, channelName, musicName, likes, comments, avatarUri,follower } =
  data;
  return (
    <View style = {styles.content}>
      <View style = {styles.contentTab}>
        <View style= {styles.TextIcon}>
          <Text style = {styles.Text}>{channelName}</Text>
          <Icon style = {styles.Icon} name = "chevron-down" size={15} color = "black"/>
        </View>
        <TouchableOpacity
        // name={'Message'}
        // component = {Messager} 
        onPress={() =>this.alert('chưa có thông tin gì!')}
        style = {styles.ButtomTab}>
          <Icon style = {styles.Icon} name = "sign-out" size={25} color = "black"/>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style = {styles.avatarUri}>
          <Image style={styles.avatar}
          source={require('./avatar.png')} />
          <Text style={styles.textAvatar}>@name</Text>
        </View>
        <View style={styles.contentcenter}>
          <View style= {styles.center}>
            <View style = {styles.Itemcontent}>
              <Text style = {styles.number}>122</Text>
              <Text>Follow</Text>
            </View>
            <View style = {[styles.Itemcontent,styles.border]}>
              <Text style = {styles.number}>122</Text>
                <Text>Follower</Text>
            </View>
            <View style = {styles.Itemcontent}>
              <Text style = {styles.number}>122</Text>
              <Text>Likes</Text>
            </View>
          </View>
        </View>
        <View style = {styles.ButtomCenter}>
          <TouchableOpacity 
          onPress={()=>this.alert('chưa có gì')}
          style = {styles.Buttom}>
            <Text style={styles.TextButton}>Sửa hồ sơ</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          
          style = {styles.Buttom}>
            <Icon style = {styles.Icon} name = "bookmark" size={25} color = 'black' />
          </TouchableOpacity>
          
        </View>
        
        <Tab.Navigator
         screenOptions={{
          tabBarStyle: { backgroundColor: '#eeeff1' },
          headerShown: false,
          tabBarActiveTintColor: 'black',
        }}
        >
          <Tab.Screen name="Video" component={VideoHome} 
          options={{
            tabBarIcon:({ color, size }) =>(
              <Icon style = {styles.Icon} name = "th-list" color={color} size={size} />
            )
          }}
          
          />
           <Tab.Screen name="Video đã xem" component={VideoLock} 
           options={{
            tabBarIcon:({ color, size }) =>(
              <Icon style = {styles.Icon} name = "eye-slash" color={color} size={size}/>
            )
          }}
          
          />
          <Tab.Screen name="Cá nhân" component={User}
          options={{
            tabBarIcon:({ color, size }) =>(
              <Icon style = {styles.Icon} name = "lock" color={color} size={size}/>
            )
          }}
           />
         
        </Tab.Navigator>
        
      </ScrollView>
      
    </View>
  )
}

const styles = StyleSheet.create({
content:{
  

},
contentTab:{
  flexDirection:'row',
  padding:10,
  width:'100%',
  height:50,
  borderBottomWidth:1,
},
TextIcon:{
  flexDirection:'row',
  width:'90%',
  justifyContent:'center',
  alignItems:'center'
},
Text:{
  fontSize:18,
  fontWeight:'bold',
  paddingRight:5,
  color:'black'
},
ButtomTab:{
  justifyContent:'center',
  alignItems:'center'
},
avatarUri:{
  justifyContent:'center',
  alignItems:'center',
  padding:30
},
avatar:{
  width:100,
  height:100,
  borderRadius:50,
  
},
textAvatar:{
  padding:8,
  color:'black',
  fontSize:17,
  fontWeight:'bold'
},
contentcenter:{
  justifyContent:'center',
  alignItems:'center',
},
center:{
  flexDirection:'row',
  marginTop:-25,
},
Itemcontent:{
  paddingHorizontal:15,
  alignItems:'center',
 
},
border:{
  borderLeftWidth:1,
  borderLeftColor:'#b7b7b7',
  borderRightWidth:1,
  borderRightColor:'#b7b7b7',
},
number:{
  fontSize:17,
  fontWeight:'900',
  color:'black',


},
ButtomCenter:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  padding:10,
},
Buttom:{
  backgroundColor:'#ffffff',
  padding:10,
  borderWidth:0.5,
  borderColor:'#b7b7b7',
  margin:2
},
TextButton:{
  fontSize:16,
  fontWeight:'bold',
  color:'black',
  paddingHorizontal:20,
  paddingVertical:2,

}

})