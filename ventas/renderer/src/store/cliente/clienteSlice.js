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
        addCliente: (state, { payload }) => {
            state.clientes.push(payload);
            state.isSavingCliente = false;
        },
        saving: (state) => {
            state.isSavingCliente = true;
        },
        setActive: (state, {payload}) => {
            state.clienteActive = state.clientes.find(elem => elem._id === payload);
        },
        setClientes: (state, { payload }) => {
            state.clientes = payload,
            state.isSavingCliente = false
        },
        deletecliente: (state, { payload }) => {
            state.clientes = state.filter(elem => elem._id !== payload);
            state.isSavingCliente = false;
        },
        putCliente: (state, { payload }) => {
            state.clientes = state.clientes.map(elem => {
                if(elem._id === payload._id){
                    return payload;
                }
                return elem;
            });
            state.isSavingCliente = false;
            state.clienteActive = {};
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addCliente,
    putCliente,
    saving,
    setActive,
    setClientes
} = clienteSlice.actions;