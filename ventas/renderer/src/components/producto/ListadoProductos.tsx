
import { useState } from 'react';
import { ProductoRow } from './ProductoRow'
import { ModalMovimientoProducto } from '../movimiento/ModalMovimientoProducto';

export const ListadoProductos = ({productos, setButtonActive}) => {

    const [modalMov, setModalMov] = useState(false);

  return (
    <div className='mx-2 border border-gray-200 rounded-md min-h-[calc(100vh-150px)] bg-white'>
        <div className='bg-chocolate-200 p-2'>
            <h3 className='text-2xl p-5 bg-chocolate-200'>Total: {productos.length} Productos</h3>
        </div>
        <table className='w-full'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='text-gray-600 text-center'>Codigo</th>
                    <th className='text-gray-600 text-center'>Descripcion</th>
                    <th className='text-gray-600 text-center'>Precio</th>
                    <th className='text-gray-600 text-center'>Marca</th>
                    <th className='text-gray-600 text-center'>Provedor</th>
                    <th className='text-gray-600 text-center'>Stock</th>
                    <th className='text-gray-600 text-center'>Fabrica</th>
                    <th className='text-gray-600 text-center'>Observaciones</th>
                    <th className='text-gray-600 text-center'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map(producto => (
                        <ProductoRow key={producto._id} {...producto} setButtonActive={setButtonActive} modalMov={modalMov} setModalMov={setModalMov}/>
                    ))
                }
            </tbody>
        </table>
        {
            modalMov && <ModalMovimientoProducto  setModalMov={setModalMov}/>
        }
    </div>
  )
}
