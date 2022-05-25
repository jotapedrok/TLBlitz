import { createSlice } from '@reduxjs/toolkit';
import { MouseEventHandler } from 'react';
import { AlertProps } from '../components/AlertBox';

const click: MouseEventHandler<HTMLButtonElement> = e => {
  e.preventDefault();
  console.log(e.target);
};

const initalAlert: Partial<AlertProps> = {
  content: 'Teste de contexto',
  title: 'Erro de qualquer coisa',
  hasButton: true,
  buttons: [
    { i: 1, text: 'Continuar', variant: 'success', onClick: click },
    { i: 2, text: 'Sair', variant: 'danger', onClick: click },
  ],
};
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
