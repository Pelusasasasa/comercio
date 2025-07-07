import { ClienteFormState } from "./cliente";
import { Producto } from "./producto";
import { Usuario } from "./usuario";

export interface Presupuesto {
    _id?: string;
    fecha: string;
    codigoCliente: ClienteFormState;
    datosCliente: ClienteFormState;
    tipoCliente: string;
    precio: number;
    tipoComprobante: string;
    numeroComprobante?: string;
    observaciones?: string;
    descuento?: number;
    creadoPor?: string;
};

export interface PresupuestoFormState extends Omit<Presupuesto, 'codigoCliente'>{
    codigoCliente: string;
    productos?: Producto
}