import React, { ReactElement, SetStateAction, useEffect, useState } from "react";
import { useVentaStore } from "../../hooks/useVentaStore";
import { ProductoItem } from "./ProductoItem";
import { ProductoActivo } from "../../types/producto";

interface Props {
    setModalModificarProducto: React.Dispatch<SetStateAction<Boolean>>
}

export const TablaProductos = ({setModalModificarProducto}: Props) => {

    const { ventaActive } = useVentaStore();

    if(ventaActive?.productos.length === 0) return(
        <section className="border border-gray-200 bg-white rounded-sm mx-2 h-[calc(70vh-200px)] overflow-y-auto no-scroll flex justify-center items-center">
            <p className="text-gray-500">No hay Productos Agregados</p>
        </section>
    )

return (
    <section className="border border-gray-200 bg-white rounded-sm mx-2 h-[calc(70vh-200px)] overflow-y-auto no-scroll">
        <table className="w-full">
            <thead className="">
                <tr className="bg-gray-200">
                    <th className="text-gray-600 text-xs text-start p-2">Codigo</th>
                    <th className="text-gray-600 text-xs text-start p-2">Cantdad</th>
                    <th className="text-gray-600 text-xs text-start p-2">Descripcion</th>
                    <th className="text-gray-600 text-xs text-start p-2">Iva</th>
                    <th className="text-gray-600 text-xs text-start p-2">Preico U.</th>
                    <th className="text-gray-600 text-xs text-start p-2">Total</th>
                    <th className="text-gray-600 text-xs text-start p-2">Acciones</th>
                    <th className="text-gray-600 text-xs text-start p-2">Nro Series</th>
                </tr>
            </thead>
            <tbody>
                {

                    ventaActive?.productos.map(producto => (
                        <ProductoItem key={producto._id}  {...producto} cantidad={producto.cantidad.toString() ?? '1'} setModalModificarProducto={setModalModificarProducto}/>
                    ))
                }
            </tbody>
        </table>
    </section>
)
}
