import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../screens/SignInScreen';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
        },
        animationEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen name=" " component={SignInScreen} />
    </Stack.Navigator>
  );
};
