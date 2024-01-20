import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import FoodItem from './FoodItem'
import data from '../data/data.json'


const FoodList = ({width, height, fontSize}) => {
  return (
    <View>
      <FlatList 
        horizontal
        data={data}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({item : i}) => (
          <View style={styles.container}>
            <View style={styles.containerItems}>
              <FoodItem {... i} width={width} height={height} fontSize={fontSize}/>
            </View>
          </View>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItems: {
    flexDirection: 'row',
  }
})



export default FoodList
