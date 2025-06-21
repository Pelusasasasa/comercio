import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Compensada } from '../../types/compensada';

interface CompensadaState {
    compensadas: Compensada[];
    compensadaActive: Compensada | null;
    isSavingCompensada: boolean;
    messageErrorCompensada: string | null;
};

const initialState: CompensadaState = {
    compensadas: [],
    compensadaActive: null,
    isSavingCompensada: false,
    messageErrorCompensada: null,
};


export const compensadaSlice = createSlice({
    name: 'compensada',
    initialState,
    reducers: {
        addCompensada: (state, {payload}: PayloadAction<Compensada>) => {
            state.compensadas.push(payload);
            state.isSavingCompensada = false;
        },
        deleteCompensada: (state, {payload}: PayloadAction<string>) => {
            state.compensadas = state.compensadas.filter(elem => elem._id !== payload);
            state.isSavingCompensada = false;
        },
        updateCompensada: (state, {payload}: PayloadAction<Compensada>) => {
            state.compensadas = state.compensadas.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingCompensada = false;
        },
        savingCompensada: (state) => {
            state.isSavingCompensada = true;
        },
        setActiveCompensada: (state, {payload}: PayloadAction<string>) => {
            state.compensadaActive = state.compensadas.find(elem => elem._id === payload) || null;
        },
        setCompensadas: (state, {payload}: PayloadAction<Compensada[]>) => {
            state.compensadas = payload;
            state.isSavingCompensada = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addCompensada,
    deleteCompensada,
    updateCompensada,
    savingCompensada,
    setActiveCompensada,
    setCompensadas
 } = compensadaSlice.actions;