import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Dashboard from './screens/Dashboard';
import Settings from './screens/Settings';
import {TabBar} from './AppTabBar';
import {AboutStack} from './AppStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4793AF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'semibold',
          },
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerActiveBackgroundColor: '#4793AF',
          drawerContentStyle: {
            backgroundColor: '#EEF5FF',
          },
          drawerLabelStyle: {
            marginLeft: -20,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={TabBar}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => {
              return <AntDesign name="home" size={25} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            drawerIcon: ({color}) => {
              return <AntDesign name="dashboard" size={25} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerIcon: ({color}) => {
              return <AntDesign name="setting" size={25} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name="Stack"
          component={AboutStack}
          options={{
            headerShown: false,
            drawerLabel: 'Login',
            drawerIcon: ({color}) => {
              return <AntDesign name="login" size={25} color={color} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
