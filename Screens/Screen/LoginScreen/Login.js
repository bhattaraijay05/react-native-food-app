import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import colors from '../../config/colors/colors';
import Imag from '../../config/images/images/5.jpg';
import {userLogin} from '../../redux/Reducer/userSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [animating, setanimating] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToSignup = () => {
    navigation.navigate('Signup');
  };

  const loginUser = () => {
    setanimating(true);
    dispatch(userLogin('A'));
    setanimating(false);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.whiteColor}}>
      <View style={styles.container}>
        <Image style={styles.image} source={Imag} />
        <Text style={{fontSize: 30, marginBottom: 20}}>Food App</Text>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={email => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={password => setPassword(password)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <ActivityIndicator
          animating={animating}
          size="large"
          color={colors.activityIndicator}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={loginUser}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signinBtn} onPress={goToSignup}>
          <Text style={styles.signupText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  inputView: {
    borderRadius: 30,
    width: '70%',
    backgroundColor: '#FFC0CB',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    width: '100%',
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },

  signinBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#FF1493',
  },
  loginText: {
    color: colors.whiteColor,
  },
  signupText: {
    color: colors.whiteColor,
  },
});
