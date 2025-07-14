
import { ProductoActivo } from "./producto";

export interface Venta {
    _id?: string;
    fecha: string;
    codigoCliente: string;
    precio: number;
    dolar: number;
    factura: boolean;
    tipoCliente: string | 'NORMAL' | 'INSTALADOR',
    numeroComprobante: string;
    tipoComprobante: string;
    descuento: number;
    productos: ProductoActivo[];
    observaciones?: string;
    creadoPor?: string;
}