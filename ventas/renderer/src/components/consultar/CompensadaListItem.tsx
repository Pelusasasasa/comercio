import { TfiReload } from "react-icons/tfi";
import Swal from "sweetalert2";
import { useCompensadaStore } from "../../hooks/useCompensadaStore";
import { useMovimientoStore } from "../../hooks/useMovimientoStore";
import { trasnsformarHoraMenos3 } from "../../helpers";


export const CompensadaListItem = ({_id, fecha, codigoCliente, tipoComprobante, numeroComprobante, importe, pagado, saldo, observaciones}) => {
    const { activeCompensada, startActualizarCompensada } = useCompensadaStore();
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
            startActualizarCompensada(_id);
        }
    };

    const handleActiveCompensada = () => {
        activeCompensada(_id)
        traerMovimientosPorTipoYNumero(tipoComprobante, numeroComprobante);
    };


  return (
    <tr onClick={handleActiveCompensada} className='bg-white border-b bgTr cursor-pointer  hover:bg-gray-50'>
        <td className='text-black text-center text-sm py-2'>{trasnsformarHoraMenos3(fecha)}</td>
        <td className='text-black text-center text-sm'>{numeroComprobante}</td>
        <td className='text-black text-center text-sm'>{codigoCliente.nombre}</td>
        <td className='text-black text-center text-sm'>
            <p className={tipoComprobanteStyle()}>{tipoComprobante}</p>
        </td>
        <td className='text-black text-center text-sm'>{importe?.toFixed(2)}</td>
        <td className='text-black text-center text-sm'>{pagado?.toFixed(2)}</td>
        <td className='text-black text-center text-sm'>{saldo?.toFixed(2)}</td>
        <td className='text-black text-center text-sm'>{observaciones}</td>
        <td>
            <div className="flex justify-center">
                <TfiReload size={15} className="text-black hover:text-gray-500" onClick={handleUpdate}/>
            </div>
        </td>
    </tr>
  )
}
