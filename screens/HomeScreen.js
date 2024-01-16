import React from 'react'
import {View, Text, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import FoodList from '../src/components/FoodList'

const HomeScreen = () => {

    const navigation = useNavigation()
  return (

    <View>
        <Text>Cook Book</Text>
        <FoodList/>
    <Button 
    onPress={() => navigation.navigate('FoodScreen')}
    title="Soy un boton que te lleva a la foodscreen">
    </Button>
    </View>
    
  )
}

export default HomeScreen