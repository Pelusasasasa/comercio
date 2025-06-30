import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Remito } from '../../types/remito';

interface RemitoState {
    remitoActive: Remito | null;
    remitos: Remito[];
    isSavingRemito: boolean;
    messageErrorRemito: string | null;
};

const initialState: RemitoState = {
    remitos: [],
    remitoActive: null,
    isSavingRemito: false,
    messageErrorRemito: null
};

export const remitoSlice = createSlice({
    name: 'remito',
    initialState,
    reducers: {
        addRemito: (state, { payload }: PayloadAction<Remito>) => {
            state.remitos.push(payload);
            state.isSavingRemito = false;
        },
        deleteRemito: (state, { payload }: PayloadAction<string>) => {
            state.remitos = state.remitos.filter(elem => elem._id !== payload);
            state.isSavingRemito = false;
        },
        updateRemito: (state, { payload }: PayloadAction<Remito>) => {
            state.remitos = state.remitos.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingRemito = false;
            state.remitoActive = null;
        },
        savingRemito: (state) => {
            state.isSavingRemito = true
        },
        setActiveRemito: (state, { payload }: PayloadAction<string>) => {
            state.remitoActive = state.remitos.find(elem => elem._id === payload) || null
        },
        setRemitos: (state, { payload }: PayloadAction<Remito[]>) => {
            state.remitos = payload;
            state.isSavingRemito = false
        },
        clearRemitoSlice: (state) => {
            state.isSavingRemito = false;
            state.messageErrorRemito = null;
            state.remitoActive = null;
            state.remitos = [];
        },
        finishSavingRemito: (state) => {
            state.isSavingRemito = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addRemito,
    deleteRemito,
    finishSavingRemito,
    updateRemito,
    savingRemito,
    setActiveRemito,
    setRemitos,
    clearRemitoSlice
} = remitoSlice.actions;