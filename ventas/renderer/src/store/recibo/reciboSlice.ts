import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Recibo } from '../../types/recibo';

interface ReciboState {
    recibos: Recibo[];
    reciboActive: Recibo | null;
    isSavingRecibo: boolean;
    messageErrorRecibo: string | null;
};

const initialState: ReciboState = {
    recibos: [],
    reciboActive: null,
    isSavingRecibo: false,
    messageErrorRecibo: null
};

export const reciboSlice = createSlice({
    name: 'recibo',
    initialState,
    reducers: {
        
    }
});


// Action creators are generated for each case reducer function
export const {  } = reciboSlice.actions;