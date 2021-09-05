import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {useSelector} from 'react-redux';
import colors from '../../config/colors/colors';
import {selectBasket} from '../../redux/Reducer/shoppingCartSlice';
import Icon from 'react-native-vector-icons/Feather';
import CartProducts from './CartProducts';

const height = Dimensions.get('window').height;
const Cart = () => {
  const basketItem = useSelector(selectBasket);
  const navigation = useNavigation();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    basketItem.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [basketItem, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topView}>
          <Text style={styles.cartText}>Cart</Text>
        </View>

        <View style={[styles.topButtons, {...StyleSheet.absoluteFill}]}>
          <RectButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={28} color={colors.black} />
          </RectButton>
        </View>
        {basketItem.length <= 0 ? (
          <View style={styles.noItemView}>
            <Text style={styles.noItemText}>
              You have no items in the cart. Add some items by clicking the
              button below
            </Text>
          </View>
        ) : (
          <>
            {basketItem.map(product => (
              <CartProducts product={product} key={product.id} />
            ))}
          </>
        )}
      </ScrollView>

      <View
        style={[
          {
            width: 314,
            height: 50,
            alignSelf: 'center',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 20,
          },
        ]}>
        <Text
          style={[
            styles.completeOrderText,
            {
              color: 'black',
            },
          ]}>
          Total: Rs {totalPrice}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.completeOrder}
        onPress={() => {
          basketItem.length > 0 ? null : navigation.navigate('Home');
        }}>
        <Text style={styles.completeOrderText}>
          {basketItem.length > 0 ? 'Complete Order' : 'Add Item'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  topView: {
    justifyContent: 'center',
    marginTop: 50,
  },
  cartText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    paddingHorizontal: 30,
    height: 30,
  },
  completeOrder: {
    backgroundColor: colors.completeOrder,
    width: 314,
    height: 70,
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
  },
  completeOrderText: {
    fontSize: 17,
    color: colors.whiteColor,
    fontWeight: '600',
  },
  noItemView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: height / 2,
  },
  noItemText: {
    fontSize: 30,
    textAlign: 'center',
  },
});
