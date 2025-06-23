import React from 'react'

export const MovListItem = ({_id, producto, cantidad, precio}) => {
  return (
    <tr className='border-b border-gray-200 text-black'>
      <td className='text-left align-middle font-medium px-4'>{producto?.codigo}</td>
      <td className='text-left align-middle font-medium px-4'>{producto?.descripcion}</td>
      <td className='text-left align-middle font-medium px-4'>{cantidad.toFixed(2)}</td>
      <td className='text-left align-middle font-medium px-4'>{precio.toFixed(2)}</td>
      <td className='text-left align-middle font-medium px-4'>{(precio * cantidad).toFixed(2)}</td>
    </tr>
  )
}
