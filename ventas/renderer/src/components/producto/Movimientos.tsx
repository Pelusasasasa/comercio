import React from 'react'
interface Props {
    setButtonActive: (arg: string) => void
};

export const Movimientos = ({setButtonActive}: Props) => {
  return (
    <div className='mx-10 border botder-gray-200'>
        <h3 className='text-2xl m-5 font-medium'>Historia de movimientos</h3>

        <table className='w-full'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='text-gray-600 text-center'>Fecha</th>
                    <th className='text-gray-600 text-center'>Producto</th>
                    <th className='text-gray-600 text-center'>Tipo</th>
                    <th className='text-gray-600 text-center'>Cantidad</th>
                    <th className='text-gray-600 text-center'>Stock Antes</th>
                    <th className='text-gray-600 text-center'>Stock Ahora</th>
                    <th className='text-gray-600 text-center'>Comprobante</th>
                    <th className='text-gray-600 text-center'>Creado Por</th>
                    <th className='text-gray-600 text-center'>Observacion</th>
                </tr>
            </thead>
            <tbody>
                {}
            </tbody>
        </table>
    </div>
  )
}
