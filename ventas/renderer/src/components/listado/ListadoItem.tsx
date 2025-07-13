import { Presupuesto } from '../../types/presupuesto';
import { formatearFecha } from '../../helpers/formatearFecha';
import { IoReload } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { useMovimientoStore } from '../../hooks/useMovimientoStore';
import { ListadoItemMovimiento } from './ListadoItemMovimiento';
import { Movimiento } from '../../types/movimiento';


export const ListadoItem = ({fecha, numeroComprobante, tipoComprobante, codigoCliente, precio, observaciones, tipoCliente}: Presupuesto) => {

    const { traerMovimientosPorTipoYNumero } = useMovimientoStore();
    const [movimientos, setMovimientos ] = useState<Movimiento[]>([]);

    useEffect(() => {
        const fetchMovimientos = async() => {
            let movs = numeroComprobante && await traerMovimientosPorTipoYNumero(tipoComprobante, numeroComprobante);
            setMovimientos(movs);
        };

        fetchMovimientos();
    }, [])
  return (
    <>
        <tr className='font-bold'>
            <td>{formatearFecha(fecha)}</td>
            <td>{numeroComprobante}</td>
            <td>{codigoCliente.codigo.toString().padStart(4, '0')}</td>
            <td>{codigoCliente.nombre}</td>
            <td>$ {precio.toFixed(2)}</td>
            <td>{tipoCliente}</td>
            <td>{observaciones}</td>
            <td>
                <div className='flex gap-5'>
                    <IoReload size={20} className='cursor-pointer hover:scale-125' title='Re-Imprimir'/>
                    <HiOutlineClipboardDocumentList size={20} className='cursor-pointer hover:scale-125' title='Re-Hacer'/>
                </div>
            </td>
        </tr>
        {
            movimientos.map(elem => (
                <ListadoItemMovimiento key={elem._id} {...elem}/>
            ))
        }
    </>
  )
};
