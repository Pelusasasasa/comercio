import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Producto } from '../../types/producto';


interface ProductoState {
    productoActive: Producto | null,
    productos: Producto[] 
    isSavingProducto: boolean;
    messageErrorProducto: string | null;
};


const initialState: ProductoState = {
    productoActive: null,
    productos: [],
    isSavingProducto: false,
    messageErrorProducto: null,
};

export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        addProducto: (state, { payload }: PayloadAction<Producto>) => {
            state.productos?.push(payload);
            state.isSavingProducto = false;
        },
        savingProducto: (state) => {
            state.isSavingProducto = true;
            state.messageErrorProducto = null;
        },
        setProductoActive: (state, { payload }: PayloadAction<String>) => {
            state.productoActive = state.productos.find(producto => producto._id === payload) || null;
            
        },
        setProductos: (state, { payload }: PayloadAction<Producto[]>) => {
            state.productos = payload;
        },
        updateProducto: (state, { payload }: PayloadAction<Producto>) => {
            state.productos = state.productos.map(producto => {
                if (producto._id === payload._id) {
                    return payload;
                }
                return producto;
            });
            state.isSavingProducto = false;
            state.productoActive = null;
        },
        deleteProducto: (state, { payload }: PayloadAction<string>) => {
            state.productos = state.productos.filter(producto => producto._id !== payload);
        },
        clearProductoActive: (state) => {
            state.productoActive = null;
        },
        clearProductos: (state) => {
            state.productos = [];
        },
        clearMessageErrorProducto: (state) => {
            state.messageErrorProducto = null;
        }
       
    }
});


// Action creators are generated for each case reducer function
export const { 
    addProducto,
    savingProducto,
    setProductoActive,
    setProductos,
    updateProducto,
    deleteProducto,
    clearProductoActive,
    clearProductos,
    clearMessageErrorProducto
} = productoSlice.actions;