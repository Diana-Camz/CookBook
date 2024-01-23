import React from 'react'
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import Icons from '../src/components/Icons'

//Json Data
//import data from '../src/data/data.json'


const FoodScreen = ({route}) => {
    const {id, name, img, servings, recipe} = route.params
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={{uri: img}}/>
        <Text style={styles.title}>TRENDING</Text>
        <Text style={styles.name}>{name}</Text>
      <Icons id={id}/>
      </View>
      <View>
        <Text style={styles.serving_txt}>{servings}</Text>
        <FlatList
        data={recipe}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({item : i}) => (
          <View >
            <View style={styles.container_details}>
              <Text>{i.ingredient}</Text>
              <Text>{i.amount}</Text>
            </View>
          </View>
      )}/>
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
    fontSize: 25,
    color:'white',
  },
  serving_txt: {
    color: 'white',
    fontSize: 20,
  },
  container_details: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    borderWidth: 2,
  }
})
export default FoodScreen