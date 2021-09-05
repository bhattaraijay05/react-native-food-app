import {createSlice} from '@reduxjs/toolkit';
const imageData = [
  require(`../../config/images/images/1.jpg`),
  require(`../../config/images/images/2.jpg`),
  require(`../../config/images/images/3.jpg`),
  require(`../../config/images/images/4.jpg`),
  require(`../../config/images/images/5.jpg`),
  require(`../../config/images/images/6.jpg`),
  require(`../../config/images/images/7.jpg`),
  require(`../../config/images/images/8.jpg`),
  require(`../../config/images/images/9.jpg`),
  require(`../../config/images/images/10.jpg`),
  require(`../../config/images/images/11.jpg`),
  require(`../../config/images/images/12.jpg`),
  require(`../../config/images/images/13.jpg`),
  require(`../../config/images/images/14.jpg`),
  require(`../../config/images/images/15.jpg`),
  require(`../../config/images/images/16.jpg`),
  require(`../../config/images/images/17.jpg`),
  require(`../../config/images/images/18.jpg`),
  require(`../../config/images/images/19.jpg`),
  require(`../../config/images/images/20.jpg`),
  require(`../../config/images/images/21.jpg`),
  require(`../../config/images/images/22.jpg`),
  require(`../../config/images/images/23.jpg`),
  require(`../../config/images/images/24.jpg`),
  require(`../../config/images/images/25.jpg`),
  require(`../../config/images/images/26.jpg`),
  require(`../../config/images/images/27.jpg`),
  require(`../../config/images/images/28.jpg`),
  require(`../../config/images/images/29.jpg`),
  require(`../../config/images/images/30.jpg`),
  require(`../../config/images/images/31.jpg`),
  require(`../../config/images/images/32.jpg`),
  require(`../../config/images/images/33.jpg`),
  require(`../../config/images/images/34.jpg`),
  require(`../../config/images/images/35.jpg`),
  require(`../../config/images/images/36.jpg`),
  require(`../../config/images/images/37.jpg`),
  require(`../../config/images/images/38.jpg`),
  require(`../../config/images/images/39.jpg`),
  require(`../../config/images/images/40.jpg`),
  require(`../../config/images/images/41.jpg`),
  require(`../../config/images/images/42.jpg`),
  require(`../../config/images/images/43.jpg`),
  require(`../../config/images/images/44.jpg`),
  require(`../../config/images/images/45.jpg`),
  require(`../../config/images/images/46.jpg`),
  require(`../../config/images/images/47.jpg`),
  require(`../../config/images/images/48.jpg`),
  require(`../../config/images/images/49.jpg`),
  require(`../../config/images/images/50.jpg`),
];

const allProd = imageData.map((item, index) => {
  return {
    id: index + 1,
    title: `Item ${index + 1}`,
    picture: item,
    price: 100,
    category: 'food',
    description: `This is a item ${index + 1}`,
    brand: 'Food',
    countInStock: 5,
  };
});

export const shoppingCartSlice = createSlice({
  name: 'shoppingcart',
  initialState: {
    products: allProd,
    basket: [],
    added: false,
    user: [],
    wishlist: [],
  },
  reducers: {
    addItemToWishlist: (state, action) => {
      // state.basket = [...state.basket, action.payload];
      const item = state.products.find(
        product => product.id === action.payload.id,
      );
      // Check if Item is in cart already
      const inCart = state.basket.find(item =>
        item.id === action.payload.id ? true : false,
      );

      return {
        ...state,
        wishlist: inCart
          ? state.wishlist.map(item =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.wishlist, {...item, qty: 1}],
      };
    },
    deleteItemFromWishlist: (state = initialState, action) => {
      //   let newTODOS = [...state.basket];
      //   const index = state.basket.findIndex((td) => td.id === action.payload.id);
      //   if (index >= 0) {
      //     newTODOS.splice(index, 1);
      //   } else {
      //     console.warn('Cant do this');
      //   }
      //   return {...state, basket: newTODOS};
      // },
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id),
      };
    },
    addItemToBasket: (state, action) => {
      // state.basket = [...state.basket, action.payload];
      const item = state.products.find(
        product => product.id === action.payload.id,
      );
      // Check if Item is in cart already
      const inCart = state.basket.find(item =>
        item.id === action.payload.id ? true : false,
      );

      return {
        ...state,
        basket: inCart
          ? state.basket.map(item =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.basket, {...item, qty: 1}],
      };
    },
    deleteItemFromBasket: (state = initialState, action) => {
      //   let newTODOS = [...state.basket];
      //   const index = state.basket.findIndex((td) => td.id === action.payload.id);
      //   if (index >= 0) {
      //     newTODOS.splice(index, 1);
      //   } else {
      //     console.warn('Cant do this');
      //   }
      //   return {...state, basket: newTODOS};
      // },
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload.id),
      };
    },
    increaseBasketItemQuantity: (state, action) => {
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty + 1}
            : item,
        ),
      };
    },
    decreaseBasketItemQuantity: (state, action) => {
      return {
        ...state,
        basket: state.basket.map(item =>
          item.id === action.payload.id
            ? {...item, qty: action.payload.qty - 1}
            : item,
        ),
      };
    },
    fetchUser: (state, action) => {
      state.user = action.payload;
    },
    fetchProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  addItemToBasket,
  deleteItemFromBasket,
  fetchUser,
  fetchProduct,
  adjustQuantity,
  increaseBasketItemQuantity,
  decreaseBasketItemQuantity,
  addItemToWishlist,
  deleteItemFromWishlist,
} = shoppingCartSlice.actions;

export const selectUsers = state => state.shoppingcart.user;
export const selectProducts = state => state.shoppingcart.products;
export const selectBasket = state => state.shoppingcart.basket;
export const selectWishlist = state => state.shoppingcart.wishlist;
export default shoppingCartSlice.reducer;
