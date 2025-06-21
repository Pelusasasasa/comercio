import { TfiReload } from "react-icons/tfi";
import Swal from "sweetalert2";
import { useCompensadaStore } from "../../hooks/useCompensadaStore";
import { useMovimientoStore } from "../../hooks/useMovimientoStore";


export const CompensadaListItem = ({_id, fecha, cliente, tipoComprobante, numeroComprobante, importe, pagado, saldo, observaciones}) => {
    const { activeCompensada } = useCompensadaStore();
    const { traerMovimientosPorTipoYNumero } = useMovimientoStore();

    const fechaParseada = fecha.slice(0, 10).split('-').reverse().join('/') + ' ' + fecha.slice(11, 16);

    const tipoComprobanteStyle = () => {
        if(tipoComprobante === 'Recibo') return 'text-green-700 border bg-green-100 border-green-500 rounded-lg px-2 py-1';
        return 'text-blue-700 bg-blue-100 border border-blue-500 rounded-lg px-2 py-1';
    };

    const handleUpdate = async() => {
        const {isConfirmed} = await Swal.fire({
            title: '¿Estas seguro de actualizar esta compensada?',
            showCancelButton: true,
            confirmButtonText: 'Si',
          })
        
        if(isConfirmed){
            console.log('actualizar')
        }
    };

    const handleActiveCompensada = () => {
        activeCompensada(_id)
        traerMovimientosPorTipoYNumero(tipoComprobante, numeroComprobante);
    };


  return (
    <tr onClick={handleActiveCompensada} className='bg-white border-b bgTr cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
        <td className='text-black text-center text-sm py-2'>{fechaParseada}</td>
        <td className='text-black text-center text-sm'>{numeroComprobante}</td>
        <td className='text-black text-center text-sm'>{cliente.nombre}</td>
        <td className='text-black text-center text-sm'>
            <p className={tipoComprobanteStyle()}>{tipoComprobante}</p>
        </td>
        <td className='text-black text-center text-sm'>{importe?.toFixed(2)}</td>
        <td className='text-black text-center text-sm'>{pagado?.toFixed(2)}</td>
        <td className='text-black text-center text-sm'>{saldo?.toFixed(2)}</td>
        <td className='text-black text-center text-sm'>{observaciones}</td>
        <td>
            <TfiReload size={15} className="text-black hover:text-gray-500" onClick={handleUpdate}/>
        </td>
    </tr>
  )
}
