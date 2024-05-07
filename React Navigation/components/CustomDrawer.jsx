import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerItemList} from '@react-navigation/drawer';
import {Image} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{backgroundColor: '#4793AF', height: '100%'}}>
      <ImageBackground
        source={require('../images/menu-bg.jpg')}
        style={styles.ImageBackground}>
        <Image
          source={require('../images/itachi.webp')}
          style={styles.userProfile}
        />
        <Text style={styles.text}>Nitin Yadav</Text>
      </ImageBackground>

      <View style={styles.drawerContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userProfile: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  ImageBackground: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
  },
});
