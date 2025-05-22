import {PRIMARY_COLOR, WHITE_COLOR} from '../config/constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {StyleSheet} from 'react-native';
import CalculateScreen from '../screens/CalculateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import ShipmentScreen from '../screens/ShipmentScreen';
import CalculateOrderScreen from '../screens/CalculateOrderScreen';
import SearchPackageScreen from '../screens/SearchPackageScreen';

const Tab = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tabs"
        component={TabStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CalculateOrder"
        component={CalculateOrderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchPackage"
        component={SearchPackageScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 7, // ← Add padding to top of the tab bar
          height: 55, // ← Increase height if needed
          borderTopWidth: 1,
          borderTopColor: '#cecece',
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
      barStyle={{backgroundColor: WHITE_COLOR}}
      activeColor="#cfa349" // Color of the active tab icon
      inactiveColor={PRIMARY_COLOR}
      shifting={false}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculate"
        component={CalculateScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shipment"
        component={ShipmentScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="history" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  textLabel: {
    fontSize: 14,
  },
});
export default AppStack;
