import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const DetailsFood = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={{uri: "https://s3.abcstatics.com/media/gurme/2022/07/14/s/recetas-pasta-faciles-rapidas-0003-kgLH--940x529@abc.jpg"}}/>
        <Text style={styles.title}>TRENDING</Text>
        <Text style={styles.name}>Pesto Pasta</Text>
      </View>
      <View>
        <Text>Ingredients for 3 servings</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
        <Text>Ingredient 1</Text>  
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E3E3E'
  },
  img: {
      width: 'auto',
      height: 420,
      opacity: 0.5,
  },
  title: {
    position:'absolute',
    marginTop: 330,
    marginLeft: 25,
    fontSize: 18,
    color:'white',
  },
  name: {
    position:'absolute',
    marginLeft: 25,
    marginTop: 360,
    fontSize: 20,
    color:'white',
  }
})

export default DetailsFood