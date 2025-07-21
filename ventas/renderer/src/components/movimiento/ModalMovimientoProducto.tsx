import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { useMovimientoStore, useProductoStore } from '../../hooks'
import { trasnsformarHoraMenos3 } from '../../helpers'

import { MdDeleteOutline } from "react-icons/md";
import { ModalMovimientoProductoItem } from './ModalMovimientoProductoItem';


interface Props {
  setModalMov: (arg: boolean) => void
}

export const ModalMovimientoProducto = ({ setModalMov }: Props) => {

  const {  movimientos, traerMovimientosPorProducto, isSavingMovimiento } = useMovimientoStore();
  const { productoActive, limpiarProductoActivo } = useProductoStore();


  useEffect(() => {
    productoActive && traerMovimientosPorProducto(productoActive?._id);
  }, []);

  const cerrar = () => {
    setModalMov(false)
    limpiarProductoActivo();
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/80'>
      <div className='bg-white p-6 rounded shadow-md text-center w-full mx-10 max-h-[80vh] overflow-y-auto'>
        <div className='flex-col flex items-start'>
          <div className='flex justify-between w-full'>
            <h3 className='font-medium text-xl'>Movimiento de {productoActive?.descripcion}</h3>
            <IoClose size={20} onClick={cerrar} className='cursor-pointer hover:text-gray-800 text-gray-600'/>
          </div>
          <p className='text-gray-700 '>Historial completo de movimientos de stock para este producto.</p>
        </div>
          <table className='w-full mt-5'>
          <thead>
            <tr className='border-gray-200 pb-2 border-b-2'>
              <th className='text-gray-600 text-center text-sm font-medium'>Fecha</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Tipo</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Cod. Cliente</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Cliente</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Cantidad</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Stock Antes</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Stock Ahora</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Nro° Comprobante</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Usuario</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Nro_Serie</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              movimientos.map(mov => (
                <ModalMovimientoProductoItem key={mov._id} {...mov}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
