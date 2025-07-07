import { categoriaSlice } from './categoria/categoriaSlice';
import { clienteSlice } from './cliente/clienteSlice';
import { compensadaSlice } from './compensada/compensadaSlice';
import { configureStore } from '@reduxjs/toolkit';
import { historicaSlice } from './historica/historicaSlice';
import { marcaSlice } from './marca/marcaSlice';
import { movimientoSlice } from './movimiento/movimientosSlice';
import { numeroSlice } from './numero/numeroSlice';
import { productoSlice } from './producto/productoSlice';
import { provedorSlice } from './provedor/provedorSlice';
import { reciboSlice } from './recibo/reciboSlice';
import { remitoSlice } from './remito/remitoSlice';
import { unidadMedidaSlice } from './unidadMedida/unidadMedidaSlice';
import { usuarioSlice } from './usuario/usuarioSlice';
import { ventaSlice } from './venta/ventaSlice';

export const store = configureStore({
    reducer: {
        categoria: categoriaSlice.reducer,
        cliente: clienteSlice.reducer,
        compensada: compensadaSlice.reducer,
        historica: historicaSlice.reducer,
        marca: marcaSlice.reducer,
        movimiento: movimientoSlice.reducer,
        numero: numeroSlice.reducer, //Este Store calculo que solamente lo vamos a usar en la seccion de numeros para ver los numeros, luego la modificacion se va  ahacer desde el backend
        producto: productoSlice.reducer,
        provedor: provedorSlice.reducer,
        recibo: reciboSlice.reducer,
        remito: remitoSlice.reducer,
        unidadMedida: unidadMedidaSlice.reducer,
        usuario: usuarioSlice.reducer,
        venta: ventaSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;