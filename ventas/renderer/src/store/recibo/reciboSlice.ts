import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Recibo, ReciboItem } from '../../types/recibo';

interface ReciboState {
    recibos: Recibo[];
    reciboActive: Recibo;
    isSavingRecibo: boolean;
    messageErrorRecibo: string | null;
    totalPagado: number;
};

const initialState: ReciboState = {
    recibos: [],
    totalPagado: 0,
    reciboActive: {
        _id: '',
        cliente: null,
        fecha: '',
        importe: 0,
        medioPago: '',
        observaciones: '',
        numeroComprobante: '',
        creadoPor: null,
        items: []
    },
    isSavingRecibo: false,
    messageErrorRecibo: null
};

export const reciboSlice = createSlice({
    name: 'recibo',
    initialState,
    reducers: {
        addRecibo: (state, action: PayloadAction<Recibo>) => {
            state.recibos.push(action.payload);
            state.isSavingRecibo = false;
        },
        deleteRecibo: (state, action: PayloadAction<string>) => {
            state.recibos = state.recibos.filter(recibo => recibo._id !== action.payload);
        },
        savingRecibo: (state) => {
            state.isSavingRecibo = true
        },
        setRecibos: (state, action: PayloadAction<Recibo[]>) => {
            state.recibos = action.payload;
        },
        setReciboActive: (state, action: PayloadAction<Recibo>) => {
            state.reciboActive = action.payload;
        },
        updateRecibo: (state, action: PayloadAction<Recibo>) => {
            state.recibos = state.recibos.map(recibo => {
                if (recibo._id === action.payload._id) {
                    return action.payload;
                }
                return recibo;
            });
            state.isSavingRecibo = false;
        },
        clearRecibos: (state) => {
            state.recibos = [];
            state.reciboActive = initialState.reciboActive;
            state.isSavingRecibo = false;
            state.messageErrorRecibo = null;
        },

        setItemsRecibos: (state, action: PayloadAction<ReciboItem[]>) => {
            state.reciboActive.items = action.payload;
        },
        updateItemRecibo: (state, action: PayloadAction<ReciboItem>) => {
            const index = state.reciboActive.items.findIndex(item => item._id === action.payload._id);

            if(index === -1){
                state.reciboActive.items.push(action.payload);
            }else{
                if(action.payload.pagado === 0){
                    state.reciboActive.items = state.reciboActive.items.filter(elem => elem._id !== action.payload._id)
                }else{
                    state.reciboActive.items[index] = action.payload;
                }
            };
        },
        calcularTotal: (state) => {
            state.totalPagado = state.reciboActive.items.reduce((total, item) => total + item.pagado, 0);
        }
    }
});


// Action creators are generated for each case reducer function
export const {  
    addRecibo,
    deleteRecibo,
    savingRecibo,
    setRecibos,
    setReciboActive,
    updateRecibo,
    clearRecibos,
    setItemsRecibos,
    updateItemRecibo,
    calcularTotal
} = reciboSlice.actions;