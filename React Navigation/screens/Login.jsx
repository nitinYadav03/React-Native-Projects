import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const img = require('../images/bg.jpg');
const Login = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <ImageBackground source={img} style={styles.imageBackground}>
      <View style={styles.container}>
        <Text style={styles.text}>Login Screen</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter age"
          onChangeText={text => setAge(text)}
        />
        <Button
          title="Go to User page"
          onPress={() => props.navigation.navigate('User', {name, age})}
        />
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 18,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
