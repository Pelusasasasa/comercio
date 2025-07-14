import React from 'react'
import { VscEdit } from 'react-icons/vsc'
import { useMovimientoStore } from '../../hooks'

export const MovListItem = ({_id, producto, cantidad, precio}) => {

  const { isSavingMovimiento } = useMovimientoStore();

  const handleUpdateMovimiento = () => {
    //TODO Modificar Movimiento
  }

  return (
    <tr className='border-b border-gray-200 hover:bg-yellow-100 transition-colors cursor-pointer text-gray-600'>
      <td className='text-start px-2 font-bold text-xs py-2 '>{producto?.codigo}</td>
      <td className='text-start px-2 font-bold text-xs py-2 '>{producto?.descripcion}</td>
      <td className='text-start px-2 font-bold text-xs py-2 '>{cantidad?.toFixed(2)}</td>
      <td className='text-start px-2 font-bold text-xs py-2 '>{precio?.toFixed(2)}</td>
      <td className='text-start px-2 font-bold text-xs py-2 '>{(precio * cantidad)?.toFixed(2)}</td>
      <td className='text-start px-2 font-bold text-xs py-2 '>
        <VscEdit size={20} onClick={handleUpdateMovimiento} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 ${isSavingMovimiento ? 'hidden' : 'block'}`}/>
      </td>
    </tr>
  )
}
