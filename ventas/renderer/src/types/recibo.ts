import { ClienteFormState } from "./cliente";
import { Usuario } from "./usuario";

export interface ReciboItem {
    _id: string,
    importe: number,
    pagado: number,
    saldo: number,
    observaciones: string
}

export interface Recibo {
    _id?: string;
    fecha?: string;
    codigoCliente: ClienteFormState | null;
    importe: number;
    medioPago?: string;
    creadoPor?: string | null;
    observaciones: string;
    numeroComprobante?: string;
    items?: ReciboItem[]
}