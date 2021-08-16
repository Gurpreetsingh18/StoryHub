import React from 'react';
import { StyleSheet, Text, View , Image , TouchableOpacity ,TextInput } from 'react-native';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <TextInput 
                   style ={styles.input}
                   placeholder = "Title of the Story"/>
               <TextInput 
                   style ={styles.input}
                   placeholder = "Author of the Story"/>
                <TextInput 
                  style ={styles.input}
                  placeholder = "Write your Story Here"/>
                 <TouchableOpacity>
                <Text style = {styles.buttonText} >Post the Story</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:2,
    height:30,
    width:300,
    paddingLeft:10,
  },
  buttonText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  },
});