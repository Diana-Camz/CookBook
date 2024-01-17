import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View>
      <TextInput  style={styles.searchBar}>What do you want to eat?</TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
        width: 250,
        height: 50,
        color: 'white',
        paddingLeft: 15,
        backgroundColor: '#575656',
        borderWidth: 2,
        borderColor: 'green'
        
      }
})

export default SearchBar