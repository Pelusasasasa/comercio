import React from 'react'

export const NumeroList = () => {
  return (
    <section className=' border border-gray-200 bg-white rounded-sm mx-5 h-[calc(100vh-150px)]'>
        <h3 className='p-5 bg-yellow-100 font-medium text-xl'>Total: {7} numeros configurados</h3>
        <table className='w-full'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='text-gray-600 text-xs py-2'>Tipo</th>
                    <th className='text-gray-600 text-xs py-2'>Prefijo</th>
                    <th className='text-gray-600 text-xs py-2'>Punto de Venta</th>
                    <th className='text-gray-600 text-xs py-2'>Numero Actual</th>
                    <th className='text-gray-600 text-xs py-2'>Formato</th>
                    <th className='text-gray-600 text-xs py-2'>acciones</th>
                </tr>
            </thead>
        </table>
        <tbody>
            
        </tbody>

    </section>
  )
}
