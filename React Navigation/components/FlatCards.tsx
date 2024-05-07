import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.text}>Orange</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    text: {
        fontSize: 17,
        color: 'white'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 10,
    },
    card: {
        height: 100,
        width: '23%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    cardOne: {
        backgroundColor:'red',
    },
    cardTwo: {
        backgroundColor:'green',
    },
    cardThree: {
        backgroundColor:'blue',
    },
    cardFour: {
        backgroundColor:'orange',
    },
})