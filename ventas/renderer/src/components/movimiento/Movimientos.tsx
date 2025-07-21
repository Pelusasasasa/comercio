import React, { useEffect } from 'react'
import { useMovimientoStore } from '../../hooks/useMovimientoStore'
import { MovimientoRow } from './MovimientoRow';
interface Props {
    setButtonActive: (arg: string) => void
};

export const Movimientos = ({setButtonActive}: Props) => {

    const { movimientos, traerMovimientos } = useMovimientoStore();

    useEffect(() => {
        traerMovimientos();
    }, []);

return (
    <div className='mx-2 border border-gray-200 min-h-[calc(100vh-150px)] bg-white'>
        <h3 className='text-2xl m-5 font-medium'>Historia de movimientos</h3>

        <table className='w-full'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='text-gray-600 text-center'>Fecha</th>
                    <th className='text-gray-600 text-center'>Producto</th>
                    <th className='text-gray-600 text-center'>Tipo</th>
                    <th className='text-gray-600 text-center'>Cod. Cliente</th>
                    <th className='text-gray-600 text-center'>Cliente</th>
                    <th className='text-gray-600 text-center'>Cantidad</th>
                    <th className='text-gray-600 text-center'>Stock Antes</th>
                    <th className='text-gray-600 text-center'>Stock Ahora</th>
                    <th className='text-gray-600 text-center'>Comprobante</th>
                    <th className='text-gray-600 text-center'>Creado Por</th>
                    <th className='text-gray-600 text-center'>Observacion</th>
                </tr>
            </thead>
            <tbody>
                {
                    movimientos.map( movimiento  => (
                        <MovimientoRow {...movimiento} key={movimiento._id}/>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
