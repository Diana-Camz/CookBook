import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <EvilIcons name="search" size={24} color="white" style={styles.input_icon}/>
        <TextInput  style={styles.input_txt} placeholder='What do you want to eat?' placeholderTextColor={'white'}/>
        <MaterialIcons name="keyboard-voice" size={24} color="white"  style={styles.input_icon2}/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerInput: {
    flexDirection: 'row',
    width: 350,
    height: 35,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#575656'
  },
  input_txt: {
    width: 250,
    color: 'white'
  },
  input_icon: {
    marginHorizontal: 8,
  },
  input_icon2: {
    marginLeft: 28,
  }
})

export default SearchBar