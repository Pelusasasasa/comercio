import { createSlice,  PayloadAction } from '@reduxjs/toolkit';
import { Marca } from '../../types/marca';

interface MarcaState {
    marcaActive: Marca | null;
    marcas: Marca[];
    isSavingMarca: boolean;
    messageErrorMarca: string | null;
}

const initialState: MarcaState = {
    marcas: [],
    marcaActive: null,
    isSavingMarca: false,
    messageErrorMarca: null,

}

export const marcaSlice = createSlice({
    name: 'marca',
    initialState,
    reducers: {
        addMarca: (state, { payload }: PayloadAction<Marca>) => {
            state.marcas.push(payload);
            state.isSavingMarca = false
        },
        deleteMarca: (state, { payload }: PayloadAction<string>) => {
            state.marcas = state.marcas.filter(elem => elem._id !== payload);
            state.isSavingMarca = false
        },
        updateMarca: (state, { payload }: PayloadAction<Marca>) => {
            state.marcas = state.marcas.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingMarca = false;
            state.marcaActive = null;
        },
        savingMarca: (state) => {
            state.isSavingMarca = true
        },
        setActiveMarca: (state, { payload }: PayloadAction<string>) => {
            state.marcaActive = state.marcas.find(elem => elem._id === payload) || null;
        },
        setMarcas: (state, { payload }: PayloadAction<Marca[]>) => {
            state.marcas = payload;
            state.isSavingMarca = false
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    addMarca,
    deleteMarca,
    updateMarca,
    savingMarca,
    setActiveMarca,
    setMarcas
 } = marcaSlice.actions;