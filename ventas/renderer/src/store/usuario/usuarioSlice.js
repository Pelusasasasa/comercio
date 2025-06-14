import { createSlice } from '@reduxjs/toolkit';

export const usuarioSlice = createSlice({
    name: 'venta',
    initialState: {
        usuario: {},
        isSaving: false,
        messageError: undefined
    },
    reducers: {
        setUsuario: (state, {payload}) => {
            state.usuario = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    setUsuario
} = usuarioSlice.actions;
