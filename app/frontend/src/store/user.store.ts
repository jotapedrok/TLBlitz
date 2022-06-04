import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../interfaces/IUser.interface';

const user = createSlice({
  name: 'user',

  initialState: {
    token: '',
    isAuth: false,
    user: {
      username: '',
      email: '',
      role: '',
      id: '',
    },
  },

  reducers: {
    login(state, { payload }) {
      state.token = payload;
      state.isAuth = true;
    },

    logout(state) {
      state.token = '';
      state.isAuth = false;
    },

    authenticate(state, { payload }) {
      state.isAuth = true;
      state.token = payload;
    },

    setUser(state, { payload }) {
      state.user = payload;
    },
  },
});

export default user.reducer;
export const { login, logout, authenticate } = user.actions;
