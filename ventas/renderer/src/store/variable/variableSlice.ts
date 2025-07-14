import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Variable } from '../../types/variable';

interface VariableState {
    variables: Variable[];
    variableActive: Variable | null;
    messageError: string | null;
    loadingVariable: boolean;
    isSavingVariable: boolean;
}
const initialState: VariableState = {
    variables: [],
    variableActive: null,
    messageError: null,
    loadingVariable: false,
    isSavingVariable: false,
}

export const variableSlice = createSlice({
    name: 'variable',
    initialState,
    reducers: {
        finishLoading: (state) => {
            state.loadingVariable = false;
        },
        setVariables: (state, action: PayloadAction<Variable[]>) => {
            state.variables = action.payload;
            state.loadingVariable = false;
        },
        setLoading: (state) => {
            state.loadingVariable = true;
        },
        setIsSaving: (state) => {
            state.isSavingVariable = true;
        },
        setVariableActive: (state, {payload}: PayloadAction<Variable | null>) => {
            state.variableActive = payload;
            state.loadingVariable = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    finishLoading,
    setIsSaving,
    setLoading,
    setVariableActive,
    setVariables,
} = variableSlice.actions;