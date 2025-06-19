import { Categoria } from "./categoria";
import { Marca } from "./marca";
import { Provedor } from "./provedor";
import { UnidadMedida } from "./unidadMedida";

export interface Producto {
    _id: string,
    codigo: string,
    descripcion: string,
    precio: number,
    stock: number,
    categoria: Categoria,
    codigoFabrica: string,
    marca: Marca,
    provedor: Provedor,
    unidadMedida: UnidadMedida,
    costo: number,
    iva: number,
    utilidad: number,
    stockMinimo: number,
    detalle: string
}