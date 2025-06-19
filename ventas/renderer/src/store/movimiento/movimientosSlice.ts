import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movimiento } from '../../types/movimiento';

interface MovimientoState {
    movimientos: Movimiento[];
    movimientoActive: Movimiento | null;
    isSavingMovimiento: boolean;
    messageErrorMovimiento: string | null;
}

const initialState: MovimientoState = {
    movimientos: [],
    movimientoActive: null,
    isSavingMovimiento: false,
    messageErrorMovimiento: null,
}

export const movimientoSlice = createSlice({
    name: 'movimiento',
    initialState,
    reducers: {
        addMovimiento: (state, { payload }: PayloadAction<Movimiento>) => {
            state.movimientos.push(payload);
            state.isSavingMovimiento = false
        },
        deleteMovimiento: (state, { payload }: PayloadAction<string>) => {
            state.movimientos = state.movimientos.filter(elem => elem._id !== payload);
            state.isSavingMovimiento = false
        },
        updateMovimiento: (state, { payload }: PayloadAction<Movimiento>) => {
            state.movimientos = state.movimientos.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingMovimiento = false
        },
        savingMovimiento: (state) => {
            state.isSavingMovimiento = true
        },
        setActiveMovimiento: (state, { payload }: PayloadAction<string>) => {
            state.movimientoActive = state.movimientos.find(elem => elem._id === payload) || null;
        },
        setMovimientos: (state, { payload }: PayloadAction<Movimiento[]>) => {
            state.movimientos = payload;
            state.isSavingMovimiento = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addMovimiento,
    deleteMovimiento,
    updateMovimiento,
    savingMovimiento,
    setActiveMovimiento,
    setMovimientos
} = movimientoSlice.actions;