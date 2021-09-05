import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import colors from '../../config/colors/colors';
import {
  selectBasket,
  selectWishlist,
} from '../../redux/Reducer/shoppingCartSlice';
import About from '../HomePage/About';
import Cart from '../HomePage/Cart';
import Wishlist from '../HomePage/Wishlist';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  const products = useSelector(selectBasket);
  const wish = useSelector(selectWishlist);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: colors.bottomIconSelectedColor,
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
      />

      <Tab.Screen
        name="Trending"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <Icon name="shopping-bag" color={color} size={24} />
          ),
          tabBarBadge: products.length > 0 ? products.length : null,
        }}
      />
      <Tab.Screen
        name="WishList"
        component={Wishlist}
        options={{
          tabBarLabel: 'WishList',
          tabBarIcon: ({color}) => (
            <Icon name="heart" color={color} size={24} />
          ),
          tabBarBadge: wish.length > 0 ? wish.length : null,
        }}
      />
      <Tab.Screen
        name="Settingss"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color}) => (
            <Icon name="help-circle" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
