import { Presupuesto } from '../../types/presupuesto';
import { formatearFecha } from '../../helpers/formatearFecha';
import { IoReload } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { useEffect } from 'react';
import { useMovimientoStore } from '../../hooks/useMovimientoStore';


export const ListadoItem = ({fecha, numeroComprobante, tipoComprobante, codigoCliente, precio}: Presupuesto) => {

    const { traerMovimientosPorTipoYNumero, movimientos } = useMovimientoStore();

    useEffect(() => {
        numeroComprobante && traerMovimientosPorTipoYNumero(tipoComprobante, numeroComprobante)
    }, [])
    
  return (
    <tr>
        <td>{formatearFecha(fecha)}</td>
        <td>{numeroComprobante}</td>
        <td>{codigoCliente.codigo.toString().padStart(4, '0')}</td>
        <td>{codigoCliente.nombre}</td>
        <td>{precio.toFixed(2)}</td>
        <td>
            <div className='flex gap-5'>
                <IoReload size={20} className='cursor-pointer hover:scale-125' title='Re-Imprimir'/>
                <HiOutlineClipboardDocumentList size={20} className='cursor-pointer hover:scale-125' title='Re-Hacer'/>
            </div>
        </td>
    </tr>
  )
}
