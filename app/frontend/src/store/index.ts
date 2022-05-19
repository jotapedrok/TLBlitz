import { configureStore } from '@reduxjs/toolkit';
import user from './user.store';

const store = configureStore({
  reducer: {
    user: user
  }
});

export type RootState = ReturnType<typeof store.getState>
export default store