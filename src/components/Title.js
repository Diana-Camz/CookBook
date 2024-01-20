import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = ({title, margin}) => {
  return (
        <View style={styles.containerTitle}>
            <Text style={styles.title} marginTop={margin}>{title}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    containerTitle: {
        marginLeft: 10,
        marginVertical: 12,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        letterSpacing: 1,
        color: '#FF2C7F',
    }
})

export default Title

