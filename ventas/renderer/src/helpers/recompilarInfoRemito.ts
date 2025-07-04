import { ClienteFormState } from "../types/cliente"
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