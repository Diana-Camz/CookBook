import React from 'react'
import {View, Text, Button, StyleSheet, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FoodList from '../src/components/FoodList'
import SearchBar from '../src/components/SearchBar'
import Title from '../src/components/Title'

const HomeScreen = () => {

    const navigation = useNavigation()
  return (

    <View style={styles.container}> 
        <SearchBar/>
        <Title title='TRENDING'/>
        <FoodList width={100} height={100} fontSize={13}/>
        <Title title='RECENT'/>
        <FoodList width={180} height={180} fontSize={16}/>
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
  }
})

export default HomeScreen