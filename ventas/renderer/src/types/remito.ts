export interface Remito {
    _id?: string
    fecha: Date;
    cliente: string;
    nombreCliente: string;
    tipoComprobante: string;
    observaciones: string;
    pasado: boolean;
    creadoPor: string
}