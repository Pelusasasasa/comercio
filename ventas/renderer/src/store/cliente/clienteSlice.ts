import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClienteFormState } from '../../../types/cliente';

interface ClienteState {
    clienteActive: ClienteFormState | null,
    clientes: ClienteFormState[],
    isSavingCliente: boolean,
    messageErrorCliente: string | null
}


const initialState: ClienteState = {
    clienteActive: null,
    clientes: [],
    isSavingCliente: false,
    messageErrorCliente: null
} 

export const clienteSlice = createSlice({
    name: 'cliente',
    initialState,
    reducers: {
        addCliente: (state, { payload }: PayloadAction<ClienteFormState>) => {
            state.clientes.push(payload);
            state.isSavingCliente = false;
        },
        saving: (state) => {
            state.isSavingCliente = true;
        },
        setActive: (state, {payload}: PayloadAction<string>) => {
            state.clienteActive = state.clientes.find(elem => elem._id === payload) || null;
        },
        setClientes: (state, { payload }: PayloadAction<ClienteFormState[]>) => {
            state.clientes = payload,
            state.isSavingCliente = false
        },
        deleteCliente: (state, { payload }: PayloadAction<String>) => {
            state.clientes = state.clientes.filter(elem => elem._id !== payload);
            state.isSavingCliente = false; 
        },
        putCliente: (state, { payload }: PayloadAction<ClienteFormState>) => {
            state.clientes = state.clientes.map(elem => {
                if(elem._id === payload._id){
                    return payload;
                }
                return elem;
            });
            state.isSavingCliente = false;
            state.clienteActive = null;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addCliente,
    deleteCliente,
    putCliente,
    saving,
    setActive,
    setClientes
} = clienteSlice.actions;