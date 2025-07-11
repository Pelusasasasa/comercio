import { Cliente, ClienteFormState } from "../types/cliente"
import { PresupuestoFormState } from "../types/presupuesto";
import { Remito, RemitoFormState } from "../types/remito";
import { Usuario } from "../types/usuario";
import { Venta } from "../types/venta"


export const recompilarInfoRemito = (venta: Venta, cliente: ClienteFormState, usuario: Usuario) => {
    
    const remito: RemitoFormState = {
        fecha: `${new Date()}`,
        tipoComprobante: 'REMITO',
        codigoCliente: cliente._id,
        numeroComprobante: '',
        observaciones: '',
        pasado: false,
        creadoPor: usuario._id,
        productos: venta.productos
    };
    

    return remito;
};


export const recompilarInfoPresupuesto = (venta: Venta, cliente: ClienteFormState, usuario: Usuario) => {
    const presupuesto: PresupuestoFormState = {
        fecha: `${new Date}`,
        tipoComprobante: 'PRESUPUESTO',
        codigoCliente: cliente._id,
        tipoCliente: cliente.tipoCuenta,
        datosCliente: cliente,
        numeroComprobante: '',
        observaciones: '',
        precio: venta.precio,
        descuento: venta.descuento,
        creadoPor: usuario._id,
        productos: venta.productos
    };

    return presupuesto
};

export const recompilarInfoContado = (venta: Venta, cliente: ClienteFormState, usuario: Usuario) => {
    const contado: Venta = {
        fecha: `${new Date}`,
        tipoComprobante: 'CONTADO',
        codigoCliente: cliente._id,
        tipoCliente: cliente.tipoCuenta,
        precio: venta.precio,
        numeroComprobante: '',
        descuento: venta.descuento,
        observaciones: '',
        productos: venta.productos,
        creadoPor: usuario._id,
        factura: venta.factura
    };

    return contado;
};