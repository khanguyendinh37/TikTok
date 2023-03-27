import { View, Text,TextInput,StyleSheet,Button ,Image} from 'react-native'
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
      <Image 
      source={require('./search-bar.png')}
      style = {styles.buttonIcon}
      />
     </View>
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
    borderStyle:'solid', 
   
    borderRadius:10,
  },
  textInput :{
    width :300,
    fontWeight:'bold',
    padding:20,
    paddingVertical:20,

  },
  Button:{
    justifyContent:'center',
    alignItems:'center',
    width :'20%',
  },
  buttonIcon:{
    
    width:30,
    height:30,
    
  }

});