import { configureStore } from '@reduxjs/toolkit';
import { usuarioSlice } from './usuario/usuarioSlice';
import { clienteSlice } from './cliente/clienteSlice';
import { productoSlice } from './producto/productoSlice';
import { marcaSlice } from './marca/marcaSlice';
import { provedorSlice } from './provedor/provedorSlice';

export const store = configureStore({
    reducer: {
        cliente: clienteSlice.reducer,
        marca: marcaSlice.reducer,
        producto: productoSlice.reducer,
        provedor: provedorSlice.reducer,
        usuario: usuarioSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;