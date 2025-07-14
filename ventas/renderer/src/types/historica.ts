import { ClienteFormState } from "./cliente";
import { Usuario } from "./usuario";

export interface Historica {
    _id: string;
    fecha: string,
    codigoCliente: ClienteFormState,
    tipoComprobante: string,
    numeroComprobante: string,
    debe: number,
    haber: number,
    saldo: number,
    observaciones: string,
    creadoPor: Usuario
}