import { createSlice } from '@reduxjs/toolkit';
import { AlertProps } from '../components/AlertBox';

const initalAlert: Partial<AlertProps> = {};
const alert = createSlice({
  name: 'alert',

  initialState: {
    hasAlert: true,
    alert: initalAlert,
  },

  reducers: {
    activeAlert(state) {
      state.hasAlert = true;
    },

    desativAlert(state) {
      state.hasAlert = false;
    },

    resetAlert(state) {
      state.alert = initalAlert;
    },

    sendAlert(state, { payload }) {
      state.alert = payload;
    },
  },
});

export default alert.reducer;
export const { activeAlert, desativAlert, resetAlert, sendAlert } =
  alert.actions;
