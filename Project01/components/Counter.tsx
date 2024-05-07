import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default function Counter() {
    const [count, setCount] = useState(0);
  return (
    <View>
      <TouchableHighlight onPress={() => setCount(count+1)}>
        <View style={styles.button}>
          <Text>Touch here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countWrapper}>
        <Text style={{color: '#FF0012', fontSize: 18}}>Count: {count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    countWrapper: {
        alignItems: 'center',
        padding: 10,
    },
});