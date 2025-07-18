import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TipoTarjeta } from '../../types/tipoTarjeta';

interface TipoTarjetaState {
    tipos: TipoTarjeta[];
    loading: boolean;
    messageErrorTipoTarjeta: string | null
};

const initialState: TipoTarjetaState = {
    tipos: [],
    loading: false,
    messageErrorTipoTarjeta: null
}

export const tipoTarjetaSlice = createSlice({
    name: 'tipoTarjeta',
    initialState,
    reducers: {
        setTiposTarjetas: (state, { payload }: PayloadAction<TipoTarjeta[]>) => {
            state.tipos = payload;
            state.loading = false;
        },
        isLoading: (state) => {
            state.loading = true;
        },
        messageErrorTipoTarjeta: (state, { payload }: PayloadAction<string>) => {
            state.messageErrorTipoTarjeta = payload;
            state.loading = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    isLoading,
    messageErrorTipoTarjeta,
    setTiposTarjetas,

} = tipoTarjetaSlice.actions;