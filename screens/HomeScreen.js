import React from 'react'
import {View, Text, Button, StyleSheet, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FoodList from '../src/components/FoodList'
import SearchBar from '../src/components/SearchBar'

const HomeScreen = () => {

    const navigation = useNavigation()
  return (

    <View style={styles.container}> 
        <SearchBar/>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>TRENDING</Text>
        </View>
        <FoodList/>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>RECENT</Text>
        </View>
        <FoodList/>
    <Button 
    onPress={() => navigation.navigate('FoodScreen')}
    title="Button">
    </Button>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3E3E'
  }, 
  containerTitle: {
    marginLeft: 10,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    letterSpacing: 1,
    color: '#FF2C7F',
  },
})

export default HomeScreen