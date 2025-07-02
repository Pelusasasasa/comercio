import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Venta } from '../../types/venta';
import { ClienteFormState } from '../../types/cliente';
import { Producto, ProductoActivo } from '../../types/producto';

interface VentaState {
    ventaActive: Venta | null;
    ventas: Venta[];
    isSavingVenta: boolean;
    messageErrorVenta: string | null;

    clienteActivo: ClienteFormState | null;
    productoActivo: ProductoActivo | null;

    clientes: ClienteFormState[];
    productos: Producto[]
};

const initialState: VentaState = {
    ventas: [], 
    clientes: [],
    productos: [],

    ventaActive: null,
    clienteActivo: null,
    productoActivo: null,

    isSavingVenta: false,
    messageErrorVenta: null,
    
    
}

export const ventaSlice = createSlice({
    name: 'venta',
    initialState,
    reducers: {
        addVenta: (state, { payload }: PayloadAction<Venta>) => {
            state.ventas.push(payload);
            state.isSavingVenta = false
        },
        deleteVenta: (state, {payload}: PayloadAction<string>) => {
            state.ventas = state.ventas.filter(elem => elem._id !== payload);
            state.isSavingVenta = false
        },
        updateVenta: (state, {payload}: PayloadAction<Venta>) => {
            state.ventas = state.ventas.map(elem => 
                elem._id === payload._id ? payload : elem
            );
        },
        savingVenta: (state) => {
            state.isSavingVenta = true;
        },
        setActiveVenta: (state, { payload }: PayloadAction<string>) => {
            state.ventaActive = state.ventas.find(elem => elem._id === payload) || null;
        },
        setVentas: (state, { payload }: PayloadAction<Venta[]>) => {
            state.ventas = payload;
            state.isSavingVenta = false
        },
        clearVentas: (state) => {
            state.isSavingVenta = false;
            state.ventas = [];
            state.ventaActive = null;
            state.messageErrorVenta = null;
        },
        finishSavingVenta: (state) => {
            state.isSavingVenta = false
        },
        setClienteActive: (state, { payload }: PayloadAction<ClienteFormState>) => {
            state.clienteActivo = payload;
        },
        setClientes: (state, { payload }: PayloadAction<ClienteFormState[]>) => {
            state.clientes = payload;
            state.isSavingVenta = false;
        },
        setProductoActive: (state, { payload }: PayloadAction<ProductoActivo>) => {
            state.productoActivo = payload;
        },
        setProductos: (state, { payload }: PayloadAction<Producto[]>) => {
            state.productos = payload;
            state.isSavingVenta = false;
        },

        addProductoAVentaActiva: (state, { payload }: PayloadAction<ProductoActivo>) => {
            if(state.ventaActive){
                const producto = state.ventaActive.productos.find(elem => elem._id === payload._id) as ProductoActivo;
                if(producto){
                    producto.cantidad = (producto.cantidad) + (payload.cantidad);
                }else{
                    state.ventaActive?.productos.push(payload)
                }
            }else{
                state.ventaActive = {
                    productos: [],
                    fecha: '',
                    precio: 0,
                    codigoCliente: '',
                    factura: false,
                    numeroComprobante: '',
                    tipoComprobante: '',
                    descuento: 0,
                }
                state.ventaActive.productos = [];
                state.ventaActive?.productos.push(payload)
            }

            state.productoActivo = null;
        },

        deleteProductoAVentaActiva: (state, { payload }: PayloadAction<string>) => {
            if(state.ventaActive){
                state.ventaActive.productos = state.ventaActive?.productos.filter(elem => elem._id !== payload);
            }
        },
        
    }
});


// Action creators are generated for each case reducer function
export const { 
    addVenta,
    addProductoAVentaActiva,

    deleteVenta,
    deleteProductoAVentaActiva,

    finishSavingVenta,
    updateVenta,
    savingVenta,
    setActiveVenta,
    setVentas,
    clearVentas,

    setClienteActive,
    setClientes,
    setProductoActive,
    setProductos,
} = ventaSlice.actions;