import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from '../components/FlatCards';
import ScrollCards from '../components/ScrollCards';

const User = props => {
  const {name, age} = props.route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>User Screen</Text>
        <Text style={styles.text}>Name : {name}</Text>
        <Text style={styles.text}>Age : {age}</Text>
      </View>
      <FlatCards />
      <ScrollCards />
    </ScrollView>
  );
};

export default User;

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
});
