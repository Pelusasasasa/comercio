export interface ClienteFormState  {
    _id: string,
    codigo: string,
    nombre: string,
    dni: string,
    telefono: string,
    direccion: string,
    localidad: string,
    email?: string,
    condicionCuenta: string,
    condicionIva: string,
    tipoCuenta: string,
    observaciones?: string,
    saldo?: number | 0
};


export interface Cliente extends Omit<ClienteFormState, '_id'>{}