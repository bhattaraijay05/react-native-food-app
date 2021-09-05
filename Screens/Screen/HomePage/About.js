import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Food App made with React Native</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    fontSize: 20,
    color: '#000',
  },
});
