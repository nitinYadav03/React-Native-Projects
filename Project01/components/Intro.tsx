import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';
const reactLogo = require('../images/react-logo.png');

export default function Intro() {
  return (
    <View>
      <View>
        <Text style={styles.text}>Hello World</Text>
        <Image source={reactLogo} style={styles.logo} />
      </View>
      <View>
        <Text style={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem tempore
          explicabo, sint odio adipisci natus alias sequi quaerat tempora quas
          animi voluptate doloribus impedit, deserunt porro reiciendis
          architecto beatae omnis?
        </Text>
      </View>
      <Button title="Click Me!" onPress={() => Alert.alert('Button pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
        margin: 10,
        fontSize: 15
      },
      logo: {
        margin: 10,
        width: 100,
        height: 100,
      },
});