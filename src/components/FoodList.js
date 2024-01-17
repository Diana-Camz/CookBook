import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native'
import FoodListItem from './FoodListItem'


const FoodList = () => {
  return (
    <View style={styles.container}>
        <View style={styles.containerItems}>
          <FoodListItem/>
          <FoodListItem/>
          <FoodListItem/>
          <FoodListItem/>
          <FoodListItem/>
          <FoodListItem/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth : 1,
    borderColor: 'red',
  },
  containerItems: {
    flexDirection: 'row',
    marginHorizontal: 15,
  }
})



export default FoodList
