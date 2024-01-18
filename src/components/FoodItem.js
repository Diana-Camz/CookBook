import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native'


const FoodItem = ({name, img, width, height, fontSize}) => {
  return (
      <View style={styles.containerItem}>
        <Image style={styles.img} source={{uri: img}} width={width} height={height}/>
        <Text style={[styles.titleFood, fontSize={fontSize}]}>{name}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 8
  },
  img: {
    borderRadius: 10
  },
  titleFood: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 100,
    marginTop: 7,
    color: 'white'
  }
})



export default FoodItem