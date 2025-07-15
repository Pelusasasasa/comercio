import { Usuario } from "./usuario";

export interface Cheque {
    fechaRecibido: string;
    numero: string;
    banco: string;
    importe: number;
    fechaDeposito: string;
    entragadoPor: string;
    entrgadoA: string;
    domicilio: string;
    telefono: string;
    observaciones: string;
    creadoPor: Usuario | null;
    tipoComprobante: string;
}