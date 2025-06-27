import React from 'react'
import { CategoriaListItem } from './CategoriaListItem'

export const CategoriaList = ({categorias, setHandleCategoria}) => {
  return (
    <section className="border border-gray-200 bg-white rounded-sm mx-5 h-[calc(100vh-200px)] overflow-y-auto no-scroll">
            <h3 className="p-5 bg-yellow-100 font-medium text-xl">Total: {categorias.length}</h3>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="text-gray-600 text-xs text-start p-2">Nombre</th>
                        <th className="text-gray-600 text-xs text-start p-2">Descripcion</th>
                        <th className="text-gray-600 text-xs text-start p-2">Productos</th>
                        <th className="text-gray-600 text-xs text-start p-2">Fecha Creacion</th>
                        <th className="text-gray-600 text-xs text-start p-2">Estado</th>
                        <th className="text-gray-600 text-xs text-start p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categorias.map(marca => (
                            <CategoriaListItem key={marca._id} {...marca} setHandleCategoria={setHandleCategoria}/>
                        ))
                    }
                </tbody>
            </table>
        </section>
  )
}
