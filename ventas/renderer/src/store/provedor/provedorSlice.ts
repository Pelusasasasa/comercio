import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Provedor } from '../../types/provedor';

interface ProvedorState {
    provedores: Provedor[];
    isSavingProvedor: boolean
}

const initialState: ProvedorState = {
    provedores: [],
    isSavingProvedor: false
}

export const provedorSlice = createSlice({
    name: 'provedor',
    initialState,
    reducers: {
        setProvedores: (state, { payload }: PayloadAction<Provedor[]>) => {
            state.provedores = payload;
        },
        savingProvedor: (state) => {
            state.isSavingProvedor = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    setProvedores,
    savingProvedor
 } = provedorSlice.actions;