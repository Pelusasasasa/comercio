export interface Producto {
    _id: string,
    codigo: string,
    descripcion: string,
    precio: number,
    stock: number,
    categoria: string,
    codigoFabrica: string,
    marca: string,
    provedor: string,
    unidadMedida: string,
    costo: number,
    iva: number,
    utilidad: number,
    stockMinimo: number,
    observaciones: string
}