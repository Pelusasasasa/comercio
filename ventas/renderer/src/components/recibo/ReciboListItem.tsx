import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Compensada } from '../../types/compensada';
import { calcularTotal, updateItemRecibo } from '../../store/recibo/reciboSlice';
import { trasnsformarHoraMenos3 } from '../../helpers';


export const ReciboListItem = ({_id, fecha, numeroComprobante, tipoComprobante, importe, pagado, saldo, observaciones}: Compensada) => {
    const [value, setValue] = useState<string>(`${pagado}`);
    const dispatch = useDispatch();

    const styleSaldo = (saldo > 0 ? 'text-red-500' : 'text-black');

    useEffect(() => {
      dispatch(updateItemRecibo({ _id, importe, pagado: parseFloat(value), saldo: (importe - parseFloat(value)), observaciones}));
      dispatch(calcularTotal());
    }, [value])

    const handleValor = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value)
      setValue(e.target.value ? e.target.value : value)
    }


  return (
    <tr className='bg-white border-b bgTr cursor-pointer  hover:bg-gray-50'>
        
      <td className='text-black text-center text-sm py-2'>{trasnsformarHoraMenos3(fecha)}</td>
      <td className='text-black text-center text-sm py-2'>{numeroComprobante}</td>
      <td className='text-black text-center text-sm py-2'>{tipoComprobante}</td>
      <td className='text-black text-center text-sm py-2'>$ {importe.toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>
          <input type="string" placeholder='0.00' value={value} onChange={handleValor}  className='border border-gray-300 rounded-md p-1 text-end' />
      </td>
      <td className={`text-black text-center text-sm py-2 ${styleSaldo}`}>$ {(importe - parseFloat(value)).toFixed(2)}</td>
      <td className='text-black text-center text-sm py-2'>{observaciones}</td>
        
    </tr>
  )
}
