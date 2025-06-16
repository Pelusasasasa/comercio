import { createSlice } from '@reduxjs/toolkit';

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState: {
        clienteActive: {},
        clientes: [],
        isSavingCliente: false,
        messageErrorCliente: undefined

    },
    reducers: {
        saving: (state) => {
            state.isSavingCliente = true;
        },
        setClientes: (state, { payload }) => {
            state.clientes = payload,
            state.isSavingCliente = false
        },
    }
});


// Action creators are generated for each case reducer function
export const { saving, setClientes } = clienteSlice.actions;