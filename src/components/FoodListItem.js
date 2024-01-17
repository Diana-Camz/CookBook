import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native'


const FoodListItem = () => {
  return (
      <View style={styles.containerItem}>
        <Image style={styles.img} source={{uri: "https://s3.abcstatics.com/media/gurme/2022/07/14/s/recetas-pasta-faciles-rapidas-0003-kgLH--940x529@abc.jpg"}}/>
        <Text style={styles.titleFood}>Food Name</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    marginRight: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  titleFood: {
    color: 'white',
    fontSize: 16,

  }
})



export default FoodListItem