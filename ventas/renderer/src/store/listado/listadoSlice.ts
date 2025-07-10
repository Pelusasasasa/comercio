import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const listadoSlice = createSlice({
    name: 'listado',
    initialState: {
        listado: [],
        type: null
    },
    reducers: {
        activeType: (state, { payload }) => {
            state.type = payload;
        },
        setListados: (state, { payload }) => {
            state.listado = payload
        },
        clearListado: (state) => {
            state.listado = [];
            state.type = null
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    activeType,
    clearListado,
    setListados,
} = listadoSlice.actions;