import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import DetailsFood from '../src/components/DetailsFood'

const FoodScreen = () => {
    
  return (
    <View style={styles.container}>
      <DetailsFood/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default FoodScreen