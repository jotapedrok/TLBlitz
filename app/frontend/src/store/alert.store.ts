import { createSlice } from '@reduxjs/toolkit';
import { IAlertProps } from '../components/AlertBox';

const initalAlert: Partial<IAlertProps> = {};
const alert = createSlice({
  name: 'alert',

  initialState: {
    hasAlert: false,
    alert: initalAlert,
  },

  reducers: {
    activeAlert(state) {
      state.hasAlert = true;
    },

    desativeAlert(state) {
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
export const {
  activeAlert, desativeAlert, resetAlert, sendAlert,
} = alert.actions;
