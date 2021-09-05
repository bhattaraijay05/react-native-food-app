import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import {useDispatch} from 'react-redux';
import colors from '../../config/colors/colors';
import {
  deleteItemFromWishlist,
  selectWishlist,
} from '../../redux/Reducer/shoppingCartSlice';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const WishlistProduct = ({product}) => {
  const dispatch = useDispatch(selectWishlist);

  const navigation = useNavigation();

  const deleteItemFromCart = () =>
    dispatch(deleteItemFromWishlist({id: product.id}));

  const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View
        style={{
          backgroundColor: colors.rightSwipeColor,
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <Animated.View
          style={{
            color: 'white',
            fontWeight: '600',
            transform: [{scale}],
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={styles.rightButtons}
              onPress={() => navigation.navigate('Item', product)}>
              <Text
                style={{
                  color: colors.whiteColor,
                  textAlign: 'center',
                }}>
                Buy Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rightButtons}
              onPress={deleteItemFromCart}>
              <Icon name="trash-2" size={16} color={colors.whiteColor} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  };
  return (
    <Swipeable
      key={product.id}
      renderRightActions={RightActions}
      rightThreshold={40}>
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.itemImage}
          onPress={() => navigation.navigate('Item', product)}>
          <Image source={product.picture} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.itemDesc}>
          <Text style={styles.itemName}>{product.title}</Text>
          <Text style={styles.itemPrice}>Rs {product.price}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default WishlistProduct;

const styles = StyleSheet.create({
  rightButtons: {
    backgroundColor: 'red',
    marginRight: 15,
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 315,
    height: 100,
    backgroundColor: colors.whiteColor,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  itemImage: {
    flex: 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  itemDesc: {
    paddingLeft: 10,
    flex: 0.6,
  },
  itemName: {
    marginTop: 27,
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: colors.priceColor,
    fontSize: 15,
    marginTop: 3,
  },
  itemInc: {
    width: 65,
    height: 25,
    alignSelf: 'flex-end',
    marginRight: 30,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonsInc: {
    padding: 7,
  },
  incButtonText: {
    color: colors.whiteColor,
  },
});
