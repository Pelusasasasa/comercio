import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Venta } from '../../types/venta';
import { ClienteFormState } from '../../types/cliente';
import { ProductoActivo } from '../../types/producto';

interface NumeroSerie {
    text: string;
    id: string;
}

interface VentaState {
    ventaActive: Venta | null;
    ventas: Venta[];
    isSavingVenta: boolean;
    messageErrorVenta: string | null;

    clienteActivo: ClienteFormState | null;
    productoActivo: ProductoActivo | null;

    clientes: ClienteFormState[];
    productos: ProductoActivo[];
};

const initialState: VentaState = {
    ventas: [], 
    clientes: [],
    productos: [],

    ventaActive: {
        productos: [],
        fecha: '',
        precio: 0,
        codigoCliente: '',
        factura: false,
        numeroComprobante: '',
        tipoComprobante: '',
        descuento: 0,
    },
    clienteActivo: null,
    productoActivo: null,

    isSavingVenta: false,
    messageErrorVenta: null,
};

const calculartotal = (arreglo: ProductoActivo[]): number => {
    //Funcion para calcular el total de el precio de los productos * la cantidad
    let total = arreglo.reduce((acc, item) => {
        return acc + (item.precio * item.cantidad)
    }, 0);

    return total;
}

export const ventaSlice = createSlice({
    name: 'venta',
    initialState,
    reducers: {
        
        addProductoAVentaActiva: (state, { payload }: PayloadAction<ProductoActivo>) => {

            if (!state.ventaActive) return;
            const index = state.ventaActive?.productos.findIndex(elem => elem._id === payload._id);

            if(index !== -1){
                const producto = state.ventaActive?.productos[index];
                const cantidadAnterior = producto.cantidad || 0;
                const cantidadNueva = payload.cantidad  || 0;
                state.ventaActive.productos[index] = {
                    ...producto,
                    cantidad: cantidadAnterior + cantidadNueva,
                };
            }else{
                state.ventaActive.productos.push({
                    ...payload,
                    cantidad: payload.cantidad || 1
                }) ;
            };
            state.ventaActive.precio = calculartotal(state.ventaActive.productos);
            state.productoActivo = null;
        },

        activeProductoVenta: (state, {payload}: PayloadAction<string>) => {
            if(!state.ventaActive?.productos) return;
            
            const index = state.ventaActive?.productos.findIndex(elem => elem._id === payload);
            if(index === -1 )return;

            state.productoActivo =  state.ventaActive.productos[index];
            
        },

        addVenta: (state, { payload }: PayloadAction<Venta>) => {
            state.ventas.push(payload);
            state.isSavingVenta = false
        },

        clearClienteActivo: (state) => {
            state.clienteActivo = null;
        },

        clearVentas: (state) => {
            state.isSavingVenta = false;
            state.ventas = [];
            state.ventaActive = null;
            state.messageErrorVenta = null;
        },

        deleteProductoAVentaActiva: (state, { payload }: PayloadAction<string>) => {
            if(!state.ventaActive) return;

            state.ventaActive.productos = state.ventaActive?.productos.filter(elem => elem._id !== payload);
            state.ventaActive.precio = calculartotal(state.ventaActive.productos);
        },

        deleteVenta: (state, {payload}: PayloadAction<string>) => {
            state.ventas = state.ventas.filter(elem => elem._id !== payload);
            state.isSavingVenta = false
        },

        finishSavingVenta: (state) => {
            state.isSavingVenta = false
        },

        putCliente: (state, { payload }: PayloadAction<ClienteFormState>) => {
            if(!state.clienteActivo) return;

            state.clienteActivo = {
                ...payload,
                _id: state.clienteActivo._id,
                
            }
        },

        putNumeroSerie: (state, { payload }: PayloadAction<NumeroSerie>) => {
            if(!state.ventaActive)return;

            const { text, id } = payload;

            const index = state.ventaActive?.productos.findIndex(elem => elem._id === id);

            if(index === -1 ) return;

            state.ventaActive.productos[index].nroSerie = text;
        },

        resetState: (state) => {
            return initialState;
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
        
        setProductos: (state, { payload }: PayloadAction<ProductoActivo[]>) => {
            state.productos = payload;
            state.isSavingVenta = false;
        },

        updateVenta: (state, {payload}: PayloadAction<Venta>) => {
            state.ventas = state.ventas.map(elem => 
                elem._id === payload._id ? payload : elem
            );
        },
        
        updateProductoVenta: (state, { payload }: PayloadAction<ProductoActivo>) => {
            if(!state.ventaActive) return;
            
            state.ventaActive.productos = state.ventaActive?.productos.map(elem =>
                elem._id === payload._id ? payload : elem
            );

            state.ventaActive.precio = calculartotal(state.ventaActive.productos);
            state.productoActivo = null;
        },
        

    }
});


// Action creators are generated for each case reducer function
export const { 
    activeProductoVenta,
    addProductoAVentaActiva,
    addVenta,
    clearClienteActivo,
    clearVentas,
    deleteProductoAVentaActiva,
    deleteVenta,
    finishSavingVenta,
    putCliente,
    putNumeroSerie,
    resetState,
    savingVenta,
    setActiveVenta,
    setClienteActive,
    setClientes,
    setProductoActive,
    setProductos,
    setVentas,
    updateProductoVenta,
    updateVenta,

} = ventaSlice.actions;