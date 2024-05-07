import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function Flexbox() {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.flex}>
      <View style={[styles.box, {backgroundColor: 'red'}]}></View>
      <View style={[styles.box, {backgroundColor: 'green'}]}></View>
      <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
      <View style={[styles.box, {backgroundColor: 'orange'}]}></View>
      <View style={[styles.box, {backgroundColor: 'yellow'}]}></View>
      <View style={[styles.box, {backgroundColor: 'brown'}]}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
        margin: 5,
        elevation: 4,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 10,
    },
});