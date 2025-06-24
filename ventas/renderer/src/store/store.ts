import { configureStore } from '@reduxjs/toolkit';
import { usuarioSlice } from './usuario/usuarioSlice';
import { clienteSlice } from './cliente/clienteSlice';
import { productoSlice } from './producto/productoSlice';
import { marcaSlice } from './marca/marcaSlice';
import { provedorSlice } from './provedor/provedorSlice';
import { categoriaSlice } from './categoria/categoriaSlice';
import { unidadMedidaSlice } from './unidadMedida/unidadMedidaSlice';
import { movimientoSlice } from './movimiento/movimientosSlice';
import { compensadaSlice } from './compensada/compensadaSlice';
import { historicaSlice } from './historica/historicaSlice';
import { reciboSlice } from './recibo/reciboSlice';

export const store = configureStore({
    reducer: {
        categoria: categoriaSlice.reducer,
        cliente: clienteSlice.reducer,
        compensada: compensadaSlice.reducer,
        historica: historicaSlice.reducer,
        marca: marcaSlice.reducer,
        movimiento: movimientoSlice.reducer,
        producto: productoSlice.reducer,
        provedor: provedorSlice.reducer,
        recibo: reciboSlice.reducer,
        unidadMedida: unidadMedidaSlice.reducer,
        usuario: usuarioSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;