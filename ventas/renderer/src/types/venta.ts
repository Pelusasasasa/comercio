import { ClienteFormState } from "./cliente";

export interface Venta {
    _id?: string;
    fecha: string;
    codigoCliente: ClienteFormState;
    precio: number,
    factura: boolean,
    numeroComprobante: string,
    tipoComprobante: string,
    descuento: number
}