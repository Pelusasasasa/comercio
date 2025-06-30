export interface Remito {
    _id?: string
    fecha: string;
    cliente: Cliente;
    nombreCliente: string;
    numeroComprobante: string;
    tipoComprobante: string;
    observaciones: string;
    pasado: boolean;
    creadoPor: string
}

interface Cliente {
    codigo: string
}