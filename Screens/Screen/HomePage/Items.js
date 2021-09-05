import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../config/colors/colors';

const {width, height} = Dimensions.get('window');
const Items = ({item}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        {
          marginVertical: 20,
        },
      ]}>
      <TouchableOpacity
        onPress={() => navigation.push('Item', item)}
        style={{
          width: width / 2.5,
          height: width / 2,
          backgroundColor: colors.whiteColor,
          borderTopLeftRadius: 31,
          borderTopRightRadius: 24,
          borderBottomLeftRadius: 31,
          borderBottomRightRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          paddingTop: 10,
        }}>
        <Image
          source={item.picture}
          style={{
            height: '50%',
            resizeMode: 'cover',
            borderRadius: 30,
            width: '70%',
          }}
        />
        <View
          style={{
            width: 125,
            flex: 1,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            {item.title}
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: colors.priceColor,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 5,
            }}>
            Rs {item.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Items;

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
  midView: {},
  bottomView: {
    marginBottom: 20,
    justifyContent: 'center',
    paddingTop: 10,
  },
});
