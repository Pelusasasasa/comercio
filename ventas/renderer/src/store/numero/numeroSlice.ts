import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Numero } from '../../types/numero';

interface NumeroState {
    numeros: Numero[],
    numeroActive: Numero | null,
    isSavingNumero: boolean,
    messageErrorNumero: string | null,
};

const initialState: NumeroState = {
    numeros: [],
    numeroActive: null,
    isSavingNumero: false,
    messageErrorNumero: null,
}

export const numeroSlice = createSlice({
    name: 'numero',
    initialState,
    reducers: {
        addNumero: (state, {payload}: PayloadAction<Numero>) => {
            state.numeros.push(payload);
            state.isSavingNumero = false
        },
        deleteNumero: (state, {payload}: PayloadAction<string>) => {
            state.numeros = state.numeros.filter(elem => elem._id !== payload);
            state.isSavingNumero = false
        },
        updateNumero: (state, {payload}: PayloadAction<Numero>) => {
            state.numeros = state.numeros.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingNumero = false
        },
        savingNumero: (state) => {
            state.isSavingNumero = true
        },
        setActiveNumero: (state, {payload}: PayloadAction<string>) => {
            state.numeroActive = state.numeros.find(elem => elem._id === payload) || null;
        },
        setNumeros: (state, {payload}: PayloadAction<Numero[]>) => {
            state.numeros = payload;
            state.isSavingNumero = false
        },
        clearNumeros: (state) => {
            state.numeros = [];
            state.numeroActive = null;
            state.isSavingNumero = false;
            state.messageErrorNumero = null;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    addNumero,
    clearNumeros,
    deleteNumero,
    savingNumero,
    setActiveNumero,
    setNumeros,
    updateNumero,

 } = numeroSlice.actions;