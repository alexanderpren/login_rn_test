import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CloseButton from '../buttons/CloseButton';
import headerStyle from './headerStyle';

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={'red'} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarBadge: 3,
          headerShadowVisible: false,
          headerStyle: headerStyle,
          headerRight: () => <CloseButton />,
        }}
      />
      <Tab.Screen
        name="MyPhotos"
        component={HomeScreen}
        options={{tabBarBadge: 1}}
      />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};
