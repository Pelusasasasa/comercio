import { configureStore } from '@reduxjs/toolkit';
import { usuarioSlice } from './usuario/usuarioSlice';
import { clienteSlice } from './cliente/clienteSlice';
import { productoSlice } from './producto/productoSlice';

export const store = configureStore({
    reducer: {
        cliente: clienteSlice.reducer,
        producto: productoSlice.reducer,
        usuario: usuarioSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;