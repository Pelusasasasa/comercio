import { Usuario } from "./usuario";

export interface Tarjeta {
    cliente?: string;
    tipoTarjeta: string;
    tipoComprobante?: string;
    importe: number;
    cuotas: number;
    recargo: number;
    creadoPor?: string;
}