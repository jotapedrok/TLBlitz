import { createSlice } from '@reduxjs/toolkit';

const block = createSlice({
  name: 'block',

  initialState: {
    block: {
      id: '',
      name: '',
    },
  },

  reducers: {
    setBlock(state, { payload }) {
      state.block = payload;
    },
  },
});

export default block.reducer;
export const { setBlock } = block.actions;
