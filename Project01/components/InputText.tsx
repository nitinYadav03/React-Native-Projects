import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';

export default function InputText() {
  return (
    <View>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput style={styles.textInput} placeholder='Nitin'/>
    </View>
  );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    text: {
        margin: 10,
        fontSize: 15
    },
});