import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const listadoSlice = createSlice({
    name: 'listado',
    initialState: {
        listado: []
    },
    reducers: {
        setListados: (state, { payload }) => {
            state.listado = payload
        },
        clearListado: (state) => {
            state.listado = []
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    setListados,
    clearListado
} = listadoSlice.actions;