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

    },
});

export const {  } =  unidadMedidaSlice.actions;