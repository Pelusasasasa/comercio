import { configureStore } from '@reduxjs/toolkit';
import { usuarioSlice } from './usuario/usuarioSlice';

export const store = configureStore({
    reducer: {
        usuario: usuarioSlice.reducer
    }
})