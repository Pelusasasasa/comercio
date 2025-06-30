import React from 'react'
import { VscEdit } from 'react-icons/vsc'
import { useMovimientoStore } from '../../hooks'

export const MovListItem = ({_id, producto, cantidad, precio}) => {

  const { isSavingMovimiento } = useMovimientoStore();

  const handleUpdateMovimiento = () => {
    
  }

  return (
    <tr className='border-b border-gray-200 text-black'>
      <td className='text-left align-middle font-medium px-4'>{producto?.codigo}</td>
      <td className='text-left align-middle font-medium px-4'>{producto?.descripcion}</td>
      <td className='text-left align-middle font-medium px-4'>{cantidad?.toFixed(2)}</td>
      <td className='text-left align-middle font-medium px-4'>{precio?.toFixed(2)}</td>
      <td className='text-left align-middle font-medium px-4'>{(precio * cantidad)?.toFixed(2)}</td>
      <td className='text-left align-middle font-medium px-4'>
        <VscEdit size={20} onClick={handleUpdateMovimiento} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 ${isSavingMovimiento ? 'hidden' : 'block'}`}/>
      </td>
    </tr>
  )
}
