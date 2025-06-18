import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Categoria } from '../../types/categoria';

interface CategoriaState {
    categorias: Categoria[];
    categoriaActive: Categoria | null;
    isSavingCategoria: boolean;
    messageErrorCategoria: string | null;
}
    
    const initialState: CategoriaState = {
        categorias: [],
        categoriaActive: null,
        isSavingCategoria: false,
        messageErrorCategoria: null,
    }

export const categoriaSlice = createSlice({
    name: 'categoria',
    initialState,
    reducers: {
        addCategoria: (state, { payload }: PayloadAction<Categoria>) => {
            state.categorias.push(payload);
            state.isSavingCategoria = false
        },
        deleteCategoria: (state, { payload }: PayloadAction<string>) => {
            state.categorias = state.categorias.filter(elem => elem._id !== payload);
            state.isSavingCategoria = false
        },
        updateCategoria: (state, { payload }: PayloadAction<Categoria>) => {
            state.categorias = state.categorias.map(elem => 
                elem._id === payload._id ? payload : elem
            );
            state.isSavingCategoria = false
        },
        savingCategoria: (state) => {
            state.isSavingCategoria = true
        },
        setActiveCategoria: (state, { payload }: PayloadAction<string>) => {
            state.categoriaActive = state.categorias.find(elem => elem._id === payload) || null;
        },
        setCategorias: (state, { payload }: PayloadAction<Categoria[]>) => {
            state.categorias = payload;
            state.isSavingCategoria = false
        }
    }
});

export const { 
    addCategoria,
    deleteCategoria,
    updateCategoria,
    savingCategoria,
    setActiveCategoria,
    setCategorias
 } =  categoriaSlice.actions;