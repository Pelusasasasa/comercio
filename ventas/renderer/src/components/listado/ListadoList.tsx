import { useListadoStore } from "../../hooks/useListadoStore";
import { ListadoItem } from "./ListadoItem";


export const ListadoList = () => {

    const { listado } = useListadoStore();

  return (
    <section className='min-h-[calc(100vh-150px)] mx-2 border bg-white border-gray-200 rounded-md mt-2'>
        <h3 className='text-2xl p-5 bg-chocolate-200'>Total: 7 Presupuestos</h3>
        <table className='w-full'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='text-gray-600 text-xs text-start p-2'>Fecha</th>
                    <th className='text-gray-600 text-xs text-start p-2'>Numero</th>
                    <th className='text-gray-600 text-xs text-start p-2'>Cliente</th>
                    <th className='text-gray-600 text-xs text-start p-2'>Importe</th>
                    <th className='text-gray-600 text-xs text-start p-2'>Observaciones</th>
                    <th className='text-gray-600 text-xs text-start p-2'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                { listado.map(elem => (
                    <ListadoItem key={elem._id} {...elem}/>
                ))}
            </tbody>
        </table>
    </section>
  )
}
