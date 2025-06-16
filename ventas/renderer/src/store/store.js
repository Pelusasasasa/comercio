import { configureStore } from '@reduxjs/toolkit';
import { usuarioSlice } from './usuario/usuarioSlice';
import { clienteSlice } from './cliente/clienteSlice';

export const store = configureStore({
    reducer: {
        cliente: clienteSlice.reducer,
        usuario: usuarioSlice.reducer
    }
})