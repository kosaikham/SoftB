import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedsScreen from '../../screens/Protected/FeedsScreen';
import AlertsScreen from '../../screens/Protected/AlertsScreen';
import MoreScreen from '../../screens/Protected/MoreScreen';
import HomeStackNavigator from './HomeStackNavigator';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const activeColor = '#4775F2';
const inactiveColor = '#B8BECE';

const Tab = createBottomTabNavigator();

const ProtectedNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-home"
                size={24}
                color={focused ? activeColor : inactiveColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="feed"
                size={24}
                color={focused ? activeColor : inactiveColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Alert"
        component={AlertsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-notifications"
                size={24}
                color={focused ? activeColor : inactiveColor}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name="ios-menu"
                size={24}
                color={focused ? activeColor : inactiveColor}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ProtectedNavigator;
