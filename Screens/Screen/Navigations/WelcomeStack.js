import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../LoginScreen/Login';
import Signup from '../LoginScreen/Signup';

const Stack = createStackNavigator();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
