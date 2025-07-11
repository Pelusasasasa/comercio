
import { ProductoActivo } from "./producto";

export interface Venta {
    _id?: string;
    fecha: string;
    codigoCliente: string;
    precio: number;
    factura: boolean;
    numeroComprobante: string;
    tipoComprobante: string;
    descuento: number;
    productos: ProductoActivo[];
    observaciones?: string;
    creadoPor?: string;
}