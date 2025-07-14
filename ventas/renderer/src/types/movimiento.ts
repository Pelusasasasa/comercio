import { Cliente } from "./cliente";
import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Movimiento {
    _id: string,
    fecha: string,
    producto: Producto,
    codigoCliente: Cliente,
    precio: number,
    tipo: string,
    cantidad: number,
    stockAntes: number,
    stockAhora: number,
    numeroComprobante: string,
    creadoPor: Usuario,
    nroSerie: string

}