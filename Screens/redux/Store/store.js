import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from '../Reducer/userSlice';
import shoppingcartReducer from '../Reducer/shoppingCartSlice';

const reducers = combineReducers({
  user: userReducer,
  shoppingcart: shoppingcartReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;

//  const store = configureStore({
//   reducer: {
//     user: userReducer,
//     shoppingcart: shoppingcartReducer,
//   },
// });
// export default store;
