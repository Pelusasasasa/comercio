export interface Usuario {
    _id?: string;
    nombre: string;
    codigo: string;
    permiso: PermisoUsuario;
    activo?: boolean;
    creadoPor?: string;
    telefono?: string;
    email?: string;
}

export interface PermisoUsuario {
    cliente: boolean;
    producto: boolean;
    usuario: boolean;
    recibo: boolean;
    numero: boolean;
    consultar: boolean;
    servicioTecnico: boolean;
    venta: boolean;
}