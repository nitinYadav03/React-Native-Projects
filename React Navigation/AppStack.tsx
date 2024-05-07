import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from './screens/User';
import Login from './screens/Login';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        statusBarColor: '#4793AF',
        headerStyle: {
          backgroundColor: '#4793AF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'semibold',
        },
        headerTitleAlign: 'center',
        headerLeft: () => {
          return (
            <MaterialIcons
              name="menu"
              size={25}
              color="white"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            />
          );
        },
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerLeft: () => {
            return (
              <MaterialIcons
                name="arrow-back"
                size={25}
                color="white"
                onPress={() => navigation.dispatch(StackActions.pop())}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
};

export default AppStack;
