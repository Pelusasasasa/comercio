import React from 'react'

export const HistoricaListItem = ({fecha, numeroComprobante, cliente, tipoComprobante, debe, haber, saldo, observaciones}) => {

    const fechaParseada = fecha.slice(0, 10).split('-').reverse().join('/') + ' ' + fecha.slice(11, 16);

    const tipoComprobanteStyle = () => {
        if(tipoComprobante === 'Recibo') return 'text-green-700 border bg-green-100 border-green-500 rounded-lg px-2 py-1';
        return 'text-blue-700 bg-blue-100 border border-blue-500 rounded-lg px-2 py-1';
    };


  return (
    <tr className='bg-white border-b bgTr cursor-pointer  hover:bg-gray-50'>
      <td className='text-black text-center text-sm py-2'>{fechaParseada}</td>
      <td className='text-black text-center text-sm py-2'>{numeroComprobante}</td>
        <td className='text-black text-center text-sm py-2'>{cliente.nombre}</td>
      <td className='text-black text-center text-sm'>
            <p className={tipoComprobanteStyle()}>{tipoComprobante}</p>
      </td>
      <td className='text-black text-center text-sm py-2'>{debe.toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>{haber.toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>{saldo.toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>{observaciones}</td>
    </tr>
  )
}
