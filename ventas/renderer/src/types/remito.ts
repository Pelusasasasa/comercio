import { Producto } from "./producto";

export interface Remito {
    _id?: string
    fecha: string;
    codigoCliente: Cliente;
    datosCliente?: Cliente;
    numeroComprobante: string;
    tipoComprobante: string;
    observaciones: string;
    pasado: boolean;
    creadoPor?: string;
}

interface Cliente {
    codigo: number,
    nombre: string,
    
}

export interface RemitoFormState extends Omit<Remito, 'codigoCliente'>{
    codigoCliente: string,
    productos?: Producto[]
}