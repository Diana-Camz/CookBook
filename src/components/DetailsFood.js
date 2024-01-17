import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const DetailsFood = () => {
  return (
    <View>
        <Image style={styles.img} source={{uri: "https://content-cocina.lecturas.com/medio/2018/07/19/tarta-lemon-pie-con-merengue_43048292_800x800.jpg"}}/>
        <Text>Recipes</Text>
        <Text>Ingredients</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    img: {
        width: 50,
        height: 50,
    }
})

export default DetailsFood