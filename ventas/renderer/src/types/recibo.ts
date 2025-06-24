import { ClienteFormState } from "./cliente";
import { Usuario } from "./usuario";

export interface Recibo {
    _id: string;
    fecha: string;
    cliente: ClienteFormState,
    importe: number;
    formaPago: string;
    observaciones: string;
    numeroComprobante: string;
    creadoPor: Usuario;
}