import { View, Text ,StyleSheet, Image,TouchableOpacity,Button,ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Messager from './meesager';



export default function Message({data}) {
  const { uri, caption, channelName, musicName, likes, comments, avatarUri } =
  data;
  return (
    <View style={styles.container}>
      <View style={styles.ContainerItem}>
        <View style= {styles.TextIcon}>
            <Text style={styles.Text}>All activity</Text>
            <Icon style = {styles.Icon} name = "chevron-down" size={15} color = "black"/>
        </View>
        <TouchableOpacity>
          <View style = {styles.Icon1}>
            
            <Icon name = "paper-plane" size={25} color = "black"/> 
          </View>
        </TouchableOpacity>
        
        
      </View>
      
      
      <View style={styles.avatarItem}>
      <ScrollView>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      onPress={() => this.alert('Chưa có tin nhắn nào')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      // onPress={() => Alert.alert('Right button pressed')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      // onPress={() => Alert.alert('Right button pressed')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                      <Button 
                      style={styles.Button}
                      title='View'
                      // onPress={() => Alert.alert('Right button pressed')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butomavatar}>
            <View style={styles.avatarmessage}>
                <Image source={{uri:avatarUri}}
                  style = {styles.avatar}
                  />
                  <View style={styles.Message}>
                    <Text style={styles.TextName}>{channelName}</Text>
                    <Text style={styles.textMessage}>tin nhắn</Text>
                  </View>
                  <View style={styles.ButomItem}>
                    
                      <Button
                      style={styles.Button}
                      title='View'
                      // onPress={() => Alert.alert('Right button pressed')}
                    />
                  </View> 
                
            </View>
          </TouchableOpacity>
          
      </ScrollView>
          
      </View>
      
    </View>
  )
}
const styles =StyleSheet.create({

  container:{
    flex:1,

  },
  ContainerItem:{
    width:'100%',
    
    flexDirection:'row',
    padding:10,
    height:55,
    borderBottomWidth:1, 
  },
  TextIcon:{
    width:'90%',
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    
  },
  Text:{
    padding:5,
    fontSize:18,
    fontWeight:'bold',
    color:'black',
  },
  Icon:{
    marginTop:10,
    marginLeft:4
  },
  Icon1:{
    justifyContent:'center',
    alignContent:'center',
  },
  avatarItem:{
    padding:10,
    height:600

  },
  
  butomavatar:{
    
  
  },
  avatarmessage:{
    flexDirection:'row',
    width:'100%',
    marginTop:10,
   
  },
  avatar:{
    width:60,
    height:60,
    borderRadius:30,
   
    
  },
  Message:{

    paddingLeft:15,
    width:'65%'
  },
  TextName:{

    fontSize:18,
    fontWeight:'bold'

  },
  ButomItem:{
    justifyContent:'center',
    
  }
})