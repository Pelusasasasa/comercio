import { Producto } from "./producto";

export interface Movimiento {
    _id: string,
    fecha: string,
    producto: Producto,
    tipo: string,
    cantidad: number,
    stockAntes: number,
    stockAhora: number,
    numeroComprobante: string,
    creadoPor: string,
    detalle: string

}