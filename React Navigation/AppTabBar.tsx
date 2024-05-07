import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile';
import Home from './screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export const TabBar = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerStyle: {
          backgroundColor: '#4793AF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'semibold',
        },
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
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
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={25} />,
          tabBarLabel: 'Home',
          headerTitle: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppTabBar = () => {
  return (
    <NavigationContainer>
      <TabBar />
    </NavigationContainer>
  );
};

export default AppTabBar;
