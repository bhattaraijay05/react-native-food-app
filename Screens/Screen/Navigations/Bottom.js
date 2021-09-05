import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../config/colors/colors';

const bottomIcons = ['home', 'heart', 'user', 'help-circle'];

const Bottom = ({navigation}) => {
  const [IconSelected, setIconSelected] = useState(bottomIcons[0]);

  const iconSelected = (item) => {
    setIconSelected(item);
  };

  return (
    <View style={styles.bottomView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {bottomIcons.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              iconSelected(item);
              index === 2 ? navigation.navigate('Settings') : {};
            }}>
            <View>
              <Icon
                name={`${item}`}
                color={
                  IconSelected === item
                    ? colors.bottomIconSelectedColor
                    : colors.bottomIconNotSelectedColor
                }
                size={24}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  bottomView: {
    marginBottom: 20,
    justifyContent: 'center',
    paddingTop: 10,
  },
});
