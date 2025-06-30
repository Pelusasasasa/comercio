import React from 'react'
import { RemitoListItem } from './RemitoListItem'

export const RemitoList = ({remitos, }) => {
  return (
    <section className="border border-gray-200 bg-white rounded-sm mx-5 h-[calc(100vh-200px)] overflow-y-auto no-scroll">
            <h3 className="p-5 bg-yellow-100 font-medium text-xl">Total: {remitos.length}</h3>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="text-gray-600 text-xs text-start p-2">Fecha</th>
                        <th className="text-gray-600 text-xs text-start p-2">Cod Cliente</th>
                        <th className="text-gray-600 text-xs text-start p-2">Cliente</th>
                        <th className="text-gray-600 text-xs text-start p-2">Numero Remito</th>
                        <th className="text-gray-600 text-xs text-start p-2">Observaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        remitos.map(remito => (
                            <RemitoListItem {...remito} key={remito._id}/>    
                        ))
                    }
                </tbody>
            </table>
        </section>
  )
}
