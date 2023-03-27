import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import VideoItem from './src/VideoItem';
import { data, windowHeight } from './src/constants';
import Search from './src/Search';
import Message from './src/Inbox';
import UserItem from './src/User';
const Bottomtab = createBottomTabNavigator();
const HomeScreen = () => {
  const [activeVideoIndex,setActiveVideoIndex] = useState(0);
  const buttomTabHeight = useBottomTabBarHeight();

  return <FlatList
  data={data}
  pagingEnabled
  renderItem={({item,index}) => (<VideoItem data = {item} isAtive = {activeVideoIndex === index}/> 
  )}
  onScroll = {e =>{
    const index = Math.round(
      e.nativeEvent.contentOffset.y / (windowHeight - buttomTabHeight),

    );
    setActiveVideoIndex(index);
   
  }}
  />
};
const Discover =()=>{
  return <Search />;
}
const NewVideo =()=>{
  return null;
}
const Inbox =()=>{
  return <Message />;
}
const Profile =()=>{
  return <UserItem />;
}

export default function App() {
  return (

    <NavigationContainer>

      <Bottomtab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black' },
          headerShown: false,
          tabBarActiveTintColor: 'white',
        }}>
        <Bottomtab.Screen
          name='Home' component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./home.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            )
          }} />

        <Bottomtab.Screen
          name='Search' component={Discover}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./search.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            )
          }} />
        <Bottomtab.Screen
          name='NewVideo' component={NewVideo}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./new-video.png')}
                style={[
                  styles.newVideoButtom
                  // focused && styles.bottomTabIconFocused,
                ]}
              />
            )
          }} />
        <Bottomtab.Screen
          name='Inbox' component={Inbox}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./message.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            )
          }} />
        <Bottomtab.Screen
          name='Profile' component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./user.png')}
                style={[
                  styles.bottomTabIcon,
                  focused && styles.bottomTabIconFocused,
                ]}
              />
            )
          }} />


      </Bottomtab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    height: 20,
    width: 20,
    tintColor: 'grey',
  },
  bottomTabIconFocused: {
    tintColor: 'white'
  },
  newVideoButtom: {
    width: 48,
    height: 24,
  },
  
});
