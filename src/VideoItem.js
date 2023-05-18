import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useCallback } from 'react';
import { useRef,useEffect } from 'react';
import { View, Text, StyleSheet, Image, Animated, StatusBar, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import  Easing from 'react-native/Libraries/Animated/Easing';
import { windowHeight, windowWidth } from './constants';
import { getMusicNoteAnimation } from './Util';


export default function VideoItem({ data,isAtive }) {

    const { uri, caption, channelName, musicName, likes, comments, avatarUri } =
     data;
     const discAnimatedValue = useRef(new Animated.Value(0)).current;
     const musicNoteAnimatedValue1 = useRef(new Animated.Value(0)).current;
     const musicNoteAnimatedValue2 = useRef(new Animated.Value(0)).current;
     
       const discAnimation = {
        transform: [
          {
            rotate: discAnimatedValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      };
      const musicNoteAnimation1 = getMusicNoteAnimation(musicNoteAnimatedValue1,false);
      const musicNoteAnimation2 = getMusicNoteAnimation(musicNoteAnimatedValue2,true);

      const discAnimLoopRef = useRef();
      const MusicAnimLoopRef = useRef();
      const triggerAnimation = useCallback ( () =>{
        discAnimLoopRef .current =  Animated.loop(
            Animated.timing(discAnimatedValue, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false,
              }),
        ),
        discAnimLoopRef.current.start();
        MusicAnimLoopRef.current =  Animated.loop(
            Animated.sequence([
                Animated.timing(musicNoteAnimatedValue1, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
                Animated.timing(musicNoteAnimatedValue2, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: false,
                  }),
            ]),
        ),
        MusicAnimLoopRef.current.start();
      },[discAnimatedValue,musicNoteAnimatedValue1,musicNoteAnimatedValue2]);

    useEffect (() => {
       if(isAtive){
        triggerAnimation();
       }else{
        discAnimLoopRef.current?.stop();
        MusicAnimLoopRef.current?.stop();
        discAnimatedValue.setValue(0);
        musicNoteAnimatedValue1.setValue(0);
        musicNoteAnimatedValue2.setValue(0);
       }
       
    },[isAtive,triggerAnimation,discAnimatedValue,musicNoteAnimatedValue1,musicNoteAnimatedValue2]);

    const bottomTabHeight = useBottomTabBarHeight();

    return (
        <View style = {[styles.container,{height: windowHeight - bottomTabHeight}]}> 
           <StatusBar barStyle={'light-content'}/>
            <Video source = {{uri}} 
            style={styles.video} 
            resizeMode = "cover" 
            paused = {!isAtive}
            repeat 
            />

             <View style={styles.bottomSection}>
                <View style= {styles.bottomLeftSection}>
                    <Text style = {styles.channelName}>{channelName}</Text>
                    <Text style = {styles.caption}>{caption}</Text>
                    <View style={styles.musicNameContainer}>
                        <Image 
                        source={require('./music-note.png')}
                        style = {styles.musicNodeIcon}
                        />
                        <Text style = {styles.musicName}>{musicName}</Text>
                    </View>
                </View>
                <View style= {styles.bottomeRightSection}>
                   
                   <Animated.Image
                        source={require('./floating-music-note.png')}
                        // style = {styles.floatingMusicNote}
                        style={[styles.floatingMusicNote,  musicNoteAnimation1]}
                    />
                    <Animated.Image
                        source={require('./floating-music-note.png')}
                        // style = {styles.floatingMusicNote}
                        style={[styles.floatingMusicNote, musicNoteAnimation2]}
                    />
                    <Animated.Image source={require('./disc.png')} 
                    // style={styles.musicDisc}
                      style = {[styles.musicDisc, discAnimation]}
                    />
                </View>
             </View>
             <View style={styles.verticalBar}>
               <TouchableOpacity >
                <View style={[styles.verticalBarItem, styles.avatarContainer]} >
                        <Image 
                        source={{uri:avatarUri}}
                        style = {styles.avatar}
                        />
                        <View style={styles.followButton}>
                            <Image style= {styles.followIcon}
                            source = {require('./plus-button.png')}
                            
                            />
                        </View>
                    </View>
               </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.verticalBarItem}>
                        <Image 
                        source={require('./heart.png')}
                        style = {styles.verticalBarIcon}
                        />
                        <Text style = {styles.verticalBarText}>{likes}</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity>
                    <View style={styles.verticalBarItem}>
                        <Image 
                        source={require('./message-circle.png')}
                        style = {styles.verticalBarIcon}
                        />
                        <Text style = {styles.verticalBarText}>{comments}</Text>
                    </View>
                </TouchableOpacity>
               
                <TouchableOpacity>
                    <View style={styles.verticalBarItem}>
                        <Image 
                        source={require('./reply.png')}
                        style = {styles.verticalBarIcon}
                        />
                        <Text style = {styles.verticalBarText}>Share</Text>
                    </View>
                </TouchableOpacity>
                

             </View>
             

        </View>        
    );
}
const styles = StyleSheet.create({
    container:{
        width:windowWidth,
    },
    video: {
        position:'absolute',
        width:'100%',
        height:'100%',
    },
    bottomSection :{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        width:'100%',
        paddingHorizontal:8,
        paddingBottom:16,
    },
    bottomLeftSection:{
        flex:4,
        
    },
    bottomeRightSection:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    channelName:{
        color:"white",
        fontWeight:'bold',
    },
    caption:{
        color:'white',
        marginVertical:8,

    },
    musicNameContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    musicName:{
        color:'white',
    },
    musicNodeIcon:{
        width:12, 
        height:12,
        marginRight:8,
    },
    musicDisc:{
        width:40,
        height:40,
    },
    verticalBar:{
        position:'absolute',
        right:8,
        bottom:72,
        
    },
    verticalBarItem:{
        marginBottom:24,
        alignItems:'center',
    }, 
    verticalBarIcon :{
        width:32,
        height:32,
       
    },
    verticalBarText:{
        color:'white',
        marginTop:4,
        
    },
    avatarContainer:{
        marginBottom:48,
    },
    avatar:{
        width:48,
        height:48,
        borderRadius:24,
    },
    followButton:{
        position:'absolute',
        bottom:-8,
        width:16,
        height:16,

    },
    followIcon :{
        width:21,
        height:21
    },
    floatingMusicNote: {
        position: 'absolute',
        right: 40,
        bottom: 16,
        width: 16,
        height: 16,
        tintColor: 'white',
      },
});