import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
const Profile = () => {

  const removeUser = () => {
    console.log("hey")
  }
  return (
    <View>
      <Text>Hello User</Text>
      <Button title="SignOut" onPress={removeUser} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
