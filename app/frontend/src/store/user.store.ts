import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',

  initialState: {
    token: '',
    isAuth: false,
  },

  reducers: {
    login(state, { payload }) {
      state.token = payload;
    },

    logout(state) {
      state.token = '';
      state.isAuth = false;
    },

    authenticate(state, { payload }) {
      state.isAuth = true;
      state.token = payload;
    }
  }
});

export default user.reducer;
export const {
  login,
  logout,
  authenticate,
} = user.actions;