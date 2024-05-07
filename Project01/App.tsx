import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Intro from './components/Intro'
import InputText from './components/InputText'
import Counter from './components/Counter'
import Flexbox from './components/Flexbox'

const Separator = () => <View style={styles.separator}></View>

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Intro/>
      <Separator/>
        <InputText/>
      <Separator/>
        <Counter/>
      <Separator/>
        <Flexbox/>
      <Separator/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  separator: {
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})

export default App;
