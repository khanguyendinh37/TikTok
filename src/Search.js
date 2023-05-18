import { View, Text,TextInput,StyleSheet,Button ,Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style = {styles.contianer}>
      <View style = {styles.inputSearch}>
        <View style = {styles.searchItem}>
          <TextInput 
          style={styles.textInput}
          placeholder="Search .."
          onChangeText={newText => setText(newText)}
          
          />
        </View>
        
      <View style = {styles.Button}>
      <TouchableOpacity>
          <Image 
          source={require('./search-bar.png')}
          style = {styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
      </View>
      <View style={styles.ShowSeach}>
        <ScrollView>
          <View style = {styles.TextItem}>
            <Text style = {styles.Text}>Nội dung tìm kiếm!</Text>
          </View>
         
        </ScrollView>
      </View>
      
      
    </View>
  )
}
const styles = StyleSheet.create({
  contianer:{
    flex:1,
  },
  inputSearch:{
    width :'100%',
    flexDirection:'row',
    height:80,
    
   
  },
  searchItem:{

    justifyContent:'center'
  },
  textInput :{

    height:50,
    width :320,
    fontWeight:'bold',
    paddingLeft:15,  
  
    backgroundColor:'#ececec',
    marginLeft:8,
    borderRadius:20,
    

  },
  Button:{
    justifyContent:'center',
    alignItems:'center',
    width :'15%',
    
  },
  buttonIcon:{
    
    width:30,
    height:30,
    
  },
  ShowSeach:{
    marginTop:10,
    padding:10,
    height:600,
  },
  TextItem:{
    padding:5,
   
  },
  Text:{
    fontWeight:'bold',
    color:'black'
  }


});