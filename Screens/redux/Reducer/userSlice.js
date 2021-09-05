import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    userLogout: (state, action) => {
      state.user = null;
    },
  },
});

export const {userLogin, userLogout} = userSlice.actions;

export const selectUser = state => state.user;

export default userSlice.reducer;
