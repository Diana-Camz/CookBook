import {React, useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';


const Icons = ({id}) => {
    const navigation = useNavigation()
    const [reaction, setReaction] = useState(false)

    const handleReaction = () => {
        setReaction(!reaction)
    }

  return (
    <View style={styles.container_icons} >
        <AntDesign name="close" size={35} color="white" style={styles.icons} onPress={() => navigation.goBack()}/>
        <Feather name="upload" size={30} color="white" style={[styles.icons, styles.icon_center]}/>
        <FontAwesome name={reaction ? "heart": "heart-o"} size={26}  color={reaction ? "#DD5A5A" : "white"} style={[styles.icons, styles.icon_end]} onPress={() => handleReaction(id)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container_icons: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    icons: {
        position: 'relative',
        marginTop: 15,
        marginLeft: 15,
    },
        icon_center: {
        marginLeft: 255,
    },
        icon_end: {
        marginLeft: 17,
    }
})

export default Icons