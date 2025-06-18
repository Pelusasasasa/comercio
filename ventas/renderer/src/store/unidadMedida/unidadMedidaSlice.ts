import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UnidadMedida } from '../../types/unidadMedida';

interface unidadMedidaState {
    unidadMedidaActive: UnidadMedida | null;
    unidadMedidas: UnidadMedida[];
    isSavingUnidadMedida: boolean;
    messageErrorUnidadMedida: string | null;
};

const initialState: unidadMedidaState = {
    unidadMedidas: [],
    unidadMedidaActive: null,
    isSavingUnidadMedida: false,
    messageErrorUnidadMedida: null,
};

export const unidadMedidaSlice = createSlice({
    name: 'unidadMedida',
    initialState,
    reducers: {
        addUnidadMedida: (state, { payload }: PayloadAction<UnidadMedida>) => {
            state.unidadMedidas.push(payload);
            state.isSavingUnidadMedida = false;
        },
        deleteUnidadMedida: (state, { payload }: PayloadAction<string>) => {
            state.unidadMedidas = state.unidadMedidas.filter(elem => elem._id !== payload);
            state.isSavingUnidadMedida = false;
        },
        updateUnidadMedida: (state, { payload }: PayloadAction<UnidadMedida>) => {
            state.unidadMedidas = state.unidadMedidas.map(elem =>
                elem._id === payload._id ? payload : elem
            );
            state.isSavingUnidadMedida = false;
        },
        savingUnidadMedida: (state) => {
            state.isSavingUnidadMedida = true;
        },
        setActiveUnidadMedida: (state, { payload }: PayloadAction<string>) => {
            state.unidadMedidaActive = state.unidadMedidas.find(elem => elem._id === payload) || null;
        },
        setUnidadMedidas: (state, { payload }: PayloadAction<UnidadMedida[]>) => {
            state.unidadMedidas = payload;
            state.isSavingUnidadMedida = false;
        }
    },
});

export const {
    addUnidadMedida,
    deleteUnidadMedida,
    updateUnidadMedida,
    savingUnidadMedida,
    setActiveUnidadMedida,
    setUnidadMedidas
} =  unidadMedidaSlice.actions;