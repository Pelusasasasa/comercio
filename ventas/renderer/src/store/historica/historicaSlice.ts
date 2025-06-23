import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Historica } from '../../types/historica';


interface historicaState {
    historicaActive: Historica | null;
    historicas: Historica[];
    isSavingHistorica: boolean;
    messageErrorHistorica: string | null;
}

const  initialState: historicaState = {
    historicaActive: null,
    historicas: [],
    isSavingHistorica: false,
    messageErrorHistorica: null
}

export const historicaSlice = createSlice({
    name: 'historica',
    initialState,
    reducers: {
        addHistorica: (state, { payload }: PayloadAction<Historica>) => {
            state.historicas.push(payload);
            state.isSavingHistorica = false
        },
        deleteHistorica: (state, { payload }: PayloadAction<string>) => {
            state.historicas = state.historicas.filter(elem => elem._id !== payload);
            state.isSavingHistorica = false
        },
        updateHistorica: (state, { payload }: PayloadAction<Historica>) => {
            state.historicas = state.historicas.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingHistorica = false
        },
        savingHistorica: (state) => {
            state.isSavingHistorica = true
        },
        setActiveHistorica: (state, { payload }: PayloadAction<string>) => {
            state.historicaActive = state.historicas.find(elem => elem._id === payload) || null;
        },
        setHistoricas: (state, { payload }: PayloadAction<Historica[]>) => {
            state.historicas = payload;
            state.isSavingHistorica = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addHistorica,
    deleteHistorica,
    updateHistorica,
    savingHistorica,
    setActiveHistorica,
    setHistoricas
 } = historicaSlice.actions;