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
    observaciones?: string,
    saldo?: number
};