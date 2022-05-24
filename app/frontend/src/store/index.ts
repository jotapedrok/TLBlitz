import { configureStore } from '@reduxjs/toolkit';
import user from './user.store';
import alert from './alert.store';

const store = configureStore({
  reducer: {
    user,
    alert,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
