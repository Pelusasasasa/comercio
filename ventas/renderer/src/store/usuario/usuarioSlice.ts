import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Usuario } from '../../types/usuario';

interface UsuarioState {
    usuarioActive: Usuario | null;
    usuarios: Usuario[];
    isSavingUsuario: boolean;
    messageErrorUsuario: null;
};


const initialState: UsuarioState = {
    usuarioActive: null,
    usuarios: [],
    isSavingUsuario: false,
    messageErrorUsuario: null,
};

export const usuarioSlice = createSlice({
    name: 'venta',
    initialState,
    reducers: {
        addUsuario: (state, {payload}: PayloadAction<Usuario>) => {
            state.usuarios.push(payload);
            state.isSavingUsuario = false
        },
        deleteUsuario: (state, { payload }: PayloadAction<string>) => {
            state.usuarios = state.usuarios.filter((usuario) => usuario._id !== payload);
            state.isSavingUsuario = false;
        },
        updateUsuario: (state, { payload }: PayloadAction<Usuario>) => {
            state.usuarios = state.usuarios.map( elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingUsuario = false;
            state.usuarioActive = null;
        },
        savingUsuario: (state) => {
            state.isSavingUsuario = true;
        },
        setActiveUsuario: (state, {payload}: PayloadAction<string>) => {
            state.usuarioActive = state.usuarios.find(elem => elem._id === payload) || null;
        },
        setUsuarios: (state, { payload }: PayloadAction<Usuario[]>) => {
            state.usuarios = payload;
            state.isSavingUsuario = false
        },
        clearUsuarioSlice: (state) => {
            state.usuarioActive = null;
            state.usuarios = [];
            state.isSavingUsuario = false;
            state.messageErrorUsuario = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addUsuario,
    clearUsuarioSlice,
    deleteUsuario,
    updateUsuario,
    savingUsuario,
    setActiveUsuario,
    setUsuarios,
} = usuarioSlice.actions;
