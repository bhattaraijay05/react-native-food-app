import React, {useState} from 'react';
import {Image, View} from 'react-native';

import styled from 'styled-components/native';
import Logo from '../../config/images/logo.png';
import GoogleLogo from '../../config/images/google.png';
import FacebookLogo from '../../config/images/facebook.png';
import GithubLogo from '../../config/images/github.png';
import Flow from '../../config/images/flow.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <View>
        <ImageView>
          <Image source={Logo} />
        </ImageView>
      </View>
      <EPView>
        <Email>Email </Email>
        <EmailInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          type="email"
        />
        <Password>Password </Password>
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          type="password"
          secureTextEntry
        />
      </EPView>
      <ButtonContainer onPress={() => console.log('Pressed')}>
        <ButtonText>Login</ButtonText>
      </ButtonContainer>

      <LogoView>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Image source={FacebookLogo} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Image source={GoogleLogo} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Image source={GithubLogo} />
        </TouchableOpacity>
      </LogoView>
      <FooterView>
        <Image source={Flow} />
      </FooterView>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const ImageView = styled.View`
  margin: 30px auto 30px;
`;

const EPView = styled.View``;

const Email = styled.Text`
  left: 36px;
  font-family: Fira Code;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
`;

const Password = styled.Text`
  left: 36px;
  font-family: Fira Code;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  text-align: left;
`;

const EmailInput = styled.TextInput`
  border: 1px solid black;
  border-radius: 13px;
  margin-left: 60px;
  margin-right: 20px;
`;

const PasswordInput = styled.TextInput`
  border: 1px solid black;
  margin-left: 60px;
  margin-right: 20px;
  border-radius: 13px;
`;

const LogoView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin: 5px 80px 0px;
`;

const FooterView = styled.View`
  bottom: -10px;
`;
const ButtonContainer = styled.TouchableOpacity`
  padding: 12px;
  border-radius: 10px;
  background-color: red;
  margin: 20px 0px 0px;
  align-self: center;
  padding: 20px;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

// import {configureStore} from '@reduxjs/toolkit';
// import todoReducer from '../reducers/todoSlice';

// export default configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });

// // import {configureStore} from '@reduxjs/toolkit';
// // import {combineReducers} from 'redux';
// // import {persistReducer} from 'redux-persist';
// // import thunk from 'redux-thunk';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import todoReducer from '../reducers/todoSlice';

// // const reducers = combineReducers({
// //   todo: todoReducer,
// // });

// // const persistConfig = {
// //   key: 'myTodos',
// //   storage: AsyncStorage,
// // };

// // const persistedReducer = persistReducer(persistConfig, reducers);

// // const store = configureStore({
// //   reducer: persistedReducer,
// //   devTools: process.env.NODE_ENV !== 'production',
// //   middleware: [thunk],
// // });

// // export default store;
