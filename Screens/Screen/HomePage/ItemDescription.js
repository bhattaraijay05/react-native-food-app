import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../../config/colors/colors';
import {
  addItemToBasket,
  addItemToWishlist,
  deleteItemFromWishlist,
  selectBasket,
  selectProducts,
  selectWishlist,
} from '../../redux/Reducer/shoppingCartSlice';
import CartProducts from './CartProducts';

const WindowWidth = Dimensions.get('window').width;

const ItemDescription = ({route}) => {
  const item = route.params;
  const [heartColor, setHeartColor] = useState('white');
  const [heartIcon, setHeartIcon] = useState('heart-alt');
  const [isModalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch(selectProducts);

  const basketItem = useSelector(selectBasket);
  const wishlistItem = useSelector(selectWishlist);
  var allProd = [];

  useEffect(() => {
    wishlistItem.map(prod => {
      allProd.push(prod.id);
      if (allProd.includes(item.id)) {
        setHeartIcon('heart');
        setHeartColor('red');
      }
    });
  }, []);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();

  const addToWishlist = async () => {
    if (heartIcon == 'heart-alt') {
      await dispatch(addItemToWishlist(item));
      setHeartColor('red');
      setHeartIcon('heart');
    } else if (heartIcon == 'heart') {
      await dispatch(deleteItemFromWishlist({id: item.id}));
      setHeartColor('white');
      setHeartIcon('heart-alt');
    }
  };
  const addItemInCart = async () => {
    await dispatch(addItemToBasket(item));
    await setModalVisible(!isModalVisible);
  };
  const navigateToCart = () => {
    setModalVisible(!isModalVisible);
    navigation.navigate('Cart');
  };

  return (
    <ScrollView>
      <Image source={item.picture} style={styles.image} />
      <View style={[styles.topButtons, {...StyleSheet.absoluteFill}]}>
        <RectButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={28} color={colors.whiteColor} />
        </RectButton>
        <TouchableOpacity onPress={addToWishlist}>
          <Icons name={heartIcon} size={28} color={heartColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.namePrice}>
        <Text style={styles.name}>
          {item.title}
          <Text style={styles.brand}> ({item.brand}) </Text>
        </Text>
        <Text style={styles.price}>Rs {item.price}</Text>
      </View>

      <TouchableOpacity style={styles.addToCart} onPress={addItemInCart}>
        <Text style={styles.addToCartText}>Add To Cart</Text>
      </TouchableOpacity>

      <View style={styles.namePrice}>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              backgroundColor: '#EDEDED',
              borderRadius: 30,
              marginHorizontal: 15,
            }}>
            <View
              style={{
                borderRadius: 30,
                marginHorizontal: 15,
                marginVertical: 15,
              }}>
              <Text
                style={[
                  styles.textCan,
                  {
                    color: 'black',
                    fontWeight: 'bold',
                    marginLeft: 12,
                    fontSize: 25,
                  },
                ]}>
                Proceed To Buy
              </Text>
            </View>
            <View
              style={{
                backgroundColor: 'white',
                height: 300,
                borderRadius: 20,
              }}>
              <ScrollView>
                {basketItem.map(product => (
                  <CartProducts product={product} key={product.id} />
                ))}
              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{
                    backgroundColor: 'white',
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60,
                    marginBottom: 10,
                    borderRadius: 30,
                    marginHorizontal: 15,
                  }}>
                  <Text style={styles.textCan}>Cancle</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={navigateToCart}
                  style={{
                    backgroundColor: 'red',
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60,
                    marginBottom: 10,
                    borderRadius: 30,
                    marginHorizontal: 15,
                  }}>
                  <Text style={[styles.textCan, {color: 'white'}]}>
                    Proceed
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default ItemDescription;

const styles = StyleSheet.create({
  namePrice: {
    width: 318,
    height: 64,
    alignSelf: 'center',
  },
  name: {
    alignSelf: 'center',
    fontSize: 28,
  },
  brand: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brandColor,
  },
  price: {
    alignSelf: 'center',
    color: colors.priceColor,
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
    fontSize: 18,
    marginTop: 20,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingHorizontal: 30,
    height: 30,
  },
  addToCart: {
    backgroundColor: colors.addToCart,
    width: 314,
    height: 70,
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartText: {
    fontSize: 17,
    color: colors.whiteColor,
    fontWeight: '600',
  },
  textCan: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 300,
  },
});
