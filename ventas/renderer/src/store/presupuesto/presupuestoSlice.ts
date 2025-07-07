import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Presupuesto } from '../../types/presupuesto';

interface PresupuestoState {
    presupuestos: Presupuesto[];
    presupuestoActive: Presupuesto | null;
    isLoading: boolean;
    isSaving: boolean;
    messageError: string | null;
}

const initialState: PresupuestoState = {
    presupuestos: [],
    presupuestoActive: null,
    isLoading: false,
    isSaving: false,
    messageError: null
}

export const presupuestoSlice = createSlice({
    name: 'presupuesto',
    initialState,
    reducers: {
        addPresupuesto: (state, { payload }: PayloadAction<Presupuesto>) => {
            state.presupuestos.push(payload)
            state.isSaving = false
        },
        deletePresupuesto: (state, { payload }: PayloadAction<string>) => {
            state.presupuestos = state.presupuestos.filter(elem => elem._id === payload);
            state.isSaving = false;
        },
        loading: (state) => {
            state.isLoading = true
        },
        reset: (state) => {
            return initialState
        },
        saving: (state) => {
            state.isSaving = true;
        },
        setPresupuestos: (state, { payload }: PayloadAction<Presupuesto[]>) => {
            state.presupuestos = payload;
            state.isLoading = false;
        },
        setPresupuestoActive: (state, { payload }: PayloadAction<Presupuesto>) => {
            state.presupuestoActive = payload;
            state.isLoading = false;
        },
        updatePresupuesto: (state, { payload }: PayloadAction<Presupuesto>) => {
            state.presupuestos = state.presupuestos.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSaving = false;
        },

        
    }
});


// Action creators are generated for each case reducer function
export const { 
    addPresupuesto,
    deletePresupuesto,
    loading,
    saving,
    setPresupuestoActive,
    setPresupuestos,
    updatePresupuesto
 } = presupuestoSlice.actions;