
import { useState } from "react";
import { useMovimientoStore } from "../../hooks/useMovimientoStore";
import { MovListItem } from "./MovListItem";
import { HandleMovimientoProducto } from "./HandleMovimientoProducto";

export const MovList = () => {

    const { movimientos } = useMovimientoStore();
    const [handleMovimiento, setHandleMovimiento] = useState<boolean>(true);

    if(movimientos?.length === 0) return (
        <section className="border border-gray-200 bg-white rounded-sm mx-2 h-[calc(70vh-200px)] overflow-y-auto no-scroll flex justify-center items-center mt-5">
            <p className="text-2xl text-gray-500">No hay movimientos</p>
        </section>
    );


  return (
    <section className="border border-gray-200 bg-white rounded-sm mx-2 h-[calc(70vh-200px)] overflow-y-auto no-scroll mt-5">
        <h4 className="px-3 bg-yellow-50 font-semibold py-1 border-b">Movimientos de Productos</h4>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead>
            <tr className="bg-gray-200">
                <th className='text-gray-600 text-xs text-start p-2'>Cod-Prod</th>
                <th className='text-gray-600 text-xs text-start p-2'>Producto</th>
                <th className='text-gray-600 text-xs text-start p-2'>Cantidad</th>
                <th className='text-gray-600 text-xs text-start p-2'>Precio</th>
                <th className='text-gray-600 text-xs text-start p-2'>Total</th>
                <th className='text-gray-600 text-xs text-start p-2'>Nro Series</th>
            </tr>
        </thead>
        <tbody className="">{
            movimientos.map(movimiento => (
                <MovListItem key={movimiento._id} {...movimiento} />
            ))
        }</tbody>
    </table>
        {handleMovimiento ?? <HandleMovimientoProducto/>}
    </section>
  )
}
