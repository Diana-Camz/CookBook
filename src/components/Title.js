import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({title}) => {
  return (
        <View style={styles.containerTitle}>
            <Text style={styles.title}>{title}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    containerTitle: {
        flex: 2,
        marginLeft: 10,
        marginTop: 12,
        paddingTop: 10,
    },
    title: {
        fontSize: 20,
        letterSpacing: 1,
        color: '#FF2C7F',
    }
})

export default Title

