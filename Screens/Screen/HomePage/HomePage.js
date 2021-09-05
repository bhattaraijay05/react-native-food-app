import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import colors from '../../config/colors/colors';
import Cart from '../../config/images/icons/cart.png';
import {
  selectBasket,
  selectProducts,
} from '../../redux/Reducer/shoppingCartSlice';
import Items from './Items';
const categories = ['food', 'drink', 'some', 'else'];

const HomePage = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState(categories[0]);

  const products = useSelector(selectBasket);

  const itemSelected = item => {
    setSelected(item);
  };

  const prods = useSelector(selectProducts);

  const openTheDrawer = () => {
    console.log('hey');
  };
  const goToCart = () => {
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.headerViewIcons}>
            <TouchableOpacity onPress={openTheDrawer}>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>Food App</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={goToCart}>
                <Image source={Cart} />
              </TouchableOpacity>
              <View
                style={{
                  position: 'absolute',
                  right: -5,
                  backgroundColor: 'red',
                }}>
                <Text
                  style={{
                    position: 'absolute',
                    right: -5,
                    color: 'red',
                    top: -15,
                    fontWeight: 'bold',
                    fontSize: 22,
                  }}>
                  {products.length !== 0 ? (
                    <Text>{products.length}</Text>
                  ) : (
                    <></>
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 185,
              height: 82,
              marginLeft: 30,
              marginTop: 45,
            }}>
            <Text style={styles.headerViewText}>Enjoy the art of cooking </Text>
          </View>

          <View
            style={{
              marginHorizontal: 25,
            }}>
            <TextInput
              style={{
                width: 314,
                height: 60,
                borderRadius: 30,
                backgroundColor: colors.searchColor,
                paddingLeft: 35 + 16 + 8,
              }}
              placeholder="Search"
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
              type="text"
            />
            <Icon
              name="search"
              color="black"
              size={18}
              style={{
                position: 'absolute',
                left: 30,
                top: 21,
              }}
            />
          </View>

          {/* <ScrollView
            style={{
              height: 30,
              marginTop: 30,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => (
              <View
                key={index}
                style={
                  index === 0
                    ? {
                        height: 20,
                        width: 50,
                        marginRight: 40,
                        marginLeft: 40,
                      }
                    : {
                        height: 20,
                        marginRight: 40,
                      }
                }>
                <TouchableOpacity onPress={() => itemSelected(item)}>
                  <Text
                    style={{
                      fontSize: 17,
                      color:
                        selected === item
                          ? colors.itemSelectedColor
                          : colors.itemNotSelectedColor,
                      borderBottomColor:
                        selected === item
                          ? colors.itemSelectedColor
                          : 'transparent',
                      borderBottomWidth: 3,
                      alignSelf: 'center',
                      borderRadius: 40,
                    }}>
                    {item.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView> */}
        </View>

        {/* <View style={styles.midView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {prods.map((item, index) => {
              if (item.category.includes(selected.toLowerCase()))
                return <Items item={item} key={index} />;
            })}
          </ScrollView>
        </View> */}

        <Text style={{fontSize: 30}}>All Items</Text>
        <View style={styles.midView}>
          {prods.map((item, index) => (
            <View key={index}>
              <Items item={item} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  headerView: {
    flex: 1,
  },
  headerViewIcons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 35,
    marginTop: 55,
  },
  headerViewText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  midView: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  bottomView: {
    marginBottom: 20,
    justifyContent: 'center',
    paddingTop: 10,
  },
});
