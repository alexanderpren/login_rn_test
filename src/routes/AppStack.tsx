import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import CloseButton from '../buttons/CloseButton';
import headerStyle from './headerStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //FOR IOS
import IconTab from '../tools';

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        showLabel: false, // add this line to hide tab label
        tabBarIcon: ({focused, color, size}) => {
          //TODO: Refactoring ?
          return (
            <IconTab name={route.name} focused size={size} color={color} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarBadge: 3,
          tabBarLabel: 'Home',
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: headerStyle,
          headerRight: () => <CloseButton />,
        }}
      />
      <Tab.Screen
        name="MyPhotos"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Photos',
          headerTitle: '',
          tabBarBadge: 1,
          headerShadowVisible: false,
          headerStyle: headerStyle,
          headerRight: () => <CloseButton />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          headerTitle: '',
          tabBarBadge: 1,
          headerShadowVisible: false,
          headerStyle: headerStyle,
          headerRight: () => <CloseButton />,
        }}
      />
    </Tab.Navigator>
  );
};
