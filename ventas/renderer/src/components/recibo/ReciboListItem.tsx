import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Compensada } from '../../types/compensada';
import { calcularTotal, updateItemRecibo } from '../../store/recibo/reciboSlice';


export const ReciboListItem = ({_id, fecha, cliente, creadoPor, numeroComprobante, tipoComprobante, importe, pagado, saldo, observaciones}: Compensada) => {
    const [value, setValue] = useState(pagado);
    const dispatch = useDispatch();
    
    const fechaParseada = fecha.slice(0, 10).split('-').reverse().join('/') + ' ' + fecha.slice(11, 16);

    const styleSaldo = (saldo > 0 ? 'text-red-500' : 'text-black');

    useEffect(() => {
      dispatch(updateItemRecibo({ _id, importe, pagado: value, saldo: (importe - value), observaciones}));
      dispatch(calcularTotal());
    }, [value])


  return (
    <tr className='bg-white border-b bgTr cursor-pointer  hover:bg-gray-50'>
        
      <td className='text-black text-center text-sm py-2'>{fechaParseada}</td>
      <td className='text-black text-center text-sm py-2'>{numeroComprobante}</td>
      <td className='text-black text-center text-sm py-2'>{tipoComprobante}</td>
      <td className='text-black text-center text-sm py-2'>$ {importe.toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>
          <input type="number" placeholder='0.00' value={value} onChange={(e) => setValue(e.target.value ? parseFloat(e.target.value) : 0)} className='border border-gray-300 rounded-md p-1 text-end' />
      </td>
      <td className={`text-black text-center text-sm py-2 ${styleSaldo}`}>$ {(importe - value).toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>{observaciones}</td>
        
    </tr>
  )
}
