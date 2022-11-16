import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import CloseButton from '../buttons/CloseButton';
import headerStyle from './headerStyle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //FOR IOS
import IconTab from '../tools';
import PhotoScreen from '../screens/PhotoScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          height: 50,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#024486',
          position: 'absolute',
          borderTopWidth: 0,
        },
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
        component={PhotoScreen}
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
        component={ProfileScreen}
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
