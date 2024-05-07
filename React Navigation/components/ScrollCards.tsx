import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCards() {
  return (
    <View>
      <Text style={styles.heading}>Scroll Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.text}>Tap</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.text}>me</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.text}>to</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.text}>scroll</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.text}>more...</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.text}>👍</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    container: {
        padding: 10,
    },
    card: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#CDE8E5',
        marginRight: 10,
    },
    text: {
        fontSize: 18,
    },
})