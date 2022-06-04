import { configureStore } from '@reduxjs/toolkit';
import user from './user.store';
import alert from './alert.store';
import block from './block.store';

const store = configureStore({
  reducer: {
    user,
    alert,
    block,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
