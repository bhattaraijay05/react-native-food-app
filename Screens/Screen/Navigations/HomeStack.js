import React, {useLayoutEffect} from 'react';
// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDescription from '../HomePage/ItemDescription';
import HomePage from '../HomePage/HomePage';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Cart from '../HomePage/Cart';
import Wishlist from '../HomePage/Wishlist';

// const Stack = createSharedElementStackNavigator();
const Stack = createStackNavigator();

const HomeStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Item' || routeName === 'Cart') {
      navigation.setOptions({tabBarVisible: false});
    } else {
      navigation.setOptions({tabBarVisible: true});
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Item" component={ItemDescription} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default HomeStack;
