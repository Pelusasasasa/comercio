import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Venta } from '../../types/venta';

interface VentaState {
    ventaActive: Venta | null;
    ventas: Venta[];
    isSavingVenta: boolean;
    messageErrorVenta: string | null;
};

const initialState: VentaState = {
    ventas: [], 
    ventaActive: null,
    isSavingVenta: false,
    messageErrorVenta: null
}

export const ventaSlice = createSlice({
    name: 'venta',
    initialState,
    reducers: {
        addVenta: (state, { payload }: PayloadAction<Venta>) => {
            state.ventas.push(payload);
            state.isSavingVenta = false
        },
        deleteVenta: (state, {payload}: PayloadAction<string>) => {
            state.ventas = state.ventas.filter(elem => elem._id !== payload);
            state.isSavingVenta = false
        },
        updateVenta: (state, {payload}: PayloadAction<Venta>) => {
            state.ventas = state.ventas.map(elem => 
                elem._id === payload._id ? payload : elem
            );
        },
        savingVenta: (state) => {
            state.isSavingVenta = true;
        },
        setActiveVenta: (state, { payload }: PayloadAction<string>) => {
            state.ventaActive = state.ventas.find(elem => elem._id === payload) || null;
        },
        setVentas: (state, { payload }: PayloadAction<Venta[]>) => {
            state.ventas = payload;
            state.isSavingVenta = false
        },
        clearVentas: (state) => {
            state.isSavingVenta = false;
            state.ventas = [];
            state.ventaActive = null;
            state.messageErrorVenta = null;
        },
        finishSavingVenta: (state) => {
            state.isSavingVenta = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addVenta,
    deleteVenta,
    finishSavingVenta,
    updateVenta,
    savingVenta,
    setActiveVenta,
    setVentas,
    clearVentas
} = ventaSlice.actions;