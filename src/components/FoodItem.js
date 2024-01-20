import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native'



const FoodItem = ({name, img, width, height, fontSize, id, txtWidth}) => {
  const navigation = useNavigation()
  return (
      <View style={styles.containerItem}>
        <TouchableOpacity key={id} onPress={() => navigation.navigate('FoodScreen')}>
          <Image style={styles.img} source={{uri: img}} width={width} height={height}/>
        </TouchableOpacity>
        <Text style={[styles.titleFood, fontSize={fontSize}, width={width}]}>{name}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    marginHorizontal: 8, 
    paddingBottom: 7,
  },
  img: {
    borderRadius: 10
  },
  titleFood: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 100,
    marginTop: 7,
    color: 'white',
  }
})



export default FoodItem