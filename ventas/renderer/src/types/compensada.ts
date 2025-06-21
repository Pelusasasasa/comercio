import { ClienteFormState } from "./cliente";
import { Usuario } from "./usuario";

export interface Compensada {
    _id: string,
    fecha: string,
    cliente: ClienteFormState,
    tipoComprobante: string,
    numeroComprobante: string,
    importe: number,
    pagado: number,
    saldo: number,
    observaciones: string,
    creadoPor: Usuario
}