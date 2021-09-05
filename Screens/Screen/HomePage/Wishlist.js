import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../../config/colors/colors';
import {selectWishlist} from '../../redux/Reducer/shoppingCartSlice';
import WishlistProduct from './WishlistProduct';

const height = Dimensions.get('window').height;

const Wishlist = () => {
  const wishlistItem = useSelector(selectWishlist);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topView}>
          <Text style={styles.cartText}>Wishlist</Text>
        </View>

        {wishlistItem.length <= 0 ? (
          <View style={styles.noItemView}>
            <Text style={styles.noItemText}>
              You have no items in the wishlist. Add some items by clicking the
              button below
            </Text>
          </View>
        ) : (
          wishlistItem.map(product => (
            <WishlistProduct product={product} key={product.id} />
          ))
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
        ]}></View>

      <TouchableOpacity
        style={styles.completeOrder}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.completeOrderText}>Add More Items</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Wishlist;

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
