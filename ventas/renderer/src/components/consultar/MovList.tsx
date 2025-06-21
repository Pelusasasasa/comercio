import { useCompensadaStore } from "../../hooks/useCompensadaStore";
import { useMovimientoStore } from "../../hooks/useMovimientoStore";
import { MovListItem } from "./MovListItem";

export const MovList = () => {

    const { movimientos } = useMovimientoStore();

    if(movimientos?.length === 0) return (
        <div className="flex justify-center items-center h-96">
            <p className="text-2xl text-gray-500">No hay movimientos</p>
        </div>
    );


  return (
    <section className="h-[calc(100vh-500px)] overflow-y-auto border-gray-500 border bg-white">
        <h4 className="px-3 bg-yellow-100 py-1 border-b">Movimientos de Productos</h4>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead>
            <tr className='transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 text-xs text-gray-700 uppercase dark:text-gray-400 h-8'>
                <th className='text-left align-middle font-medium text-gray-600 text-xs py-1 h-12 px-4'>Cod-Prod</th>
                <th className='text-left align-middle font-medium text-gray-600 text-xs py-1 h-12 px-4'>Producto</th>
                <th className='text-left align-middle font-medium text-gray-600 text-xs py-1 h-12 px-4'>Cantidad</th>
                <th className='text-left align-middle font-medium text-gray-600 text-xs py-1 h-12 px-4'>Precio</th>
                <th className='text-left align-middle font-medium text-gray-600 text-xs py-1 h-12 px-4'>Total</th>
                <th className='text-left align-middle font-medium text-gray-600 text-xs py-1 h-12 px-4'>Nro Series</th>
            </tr>
        </thead>
        <tbody className="">{
            movimientos.map(movimiento => (
                <MovListItem key={movimiento._id} {...movimiento} />
            ))
        }</tbody>
    </table>
    </section>
  )
}
