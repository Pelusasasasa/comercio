import React, { useEffect, useState } from 'react'

export const ReciboListItem = ({fecha, numeroComprobante, tipoComprobante, importe, pagado, saldo, observaciones}) => {
    const [value, setValue] = useState(pagado)
    
    const fechaParseada = fecha.slice(0, 10).split('-').reverse().join('/') + ' ' + fecha.slice(11, 16);

    const styleSaldo = (saldo > 0 ? 'text-red-500' : 'text-black');


  return (
    <tr className='bg-white border-b bgTr cursor-pointer  hover:bg-gray-50'>
        
      <td className='text-black text-center text-sm py-2'>{fechaParseada}</td>
      <td className='text-black text-center text-sm py-2'>{numeroComprobante}</td>
      <td className='text-black text-center text-sm py-2'>{tipoComprobante}</td>
      <td className='text-black text-center text-sm py-2'>$ {importe.toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value ? parseFloat(e.target.value) : 0)} className='border border-gray-300 rounded-md p-1 text-end' />
      </td>
      <td className={`text-black text-center text-sm py-2 ${styleSaldo}`}>$ {(importe - value).toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>{observaciones}</td>
        
    </tr>
  )
}
