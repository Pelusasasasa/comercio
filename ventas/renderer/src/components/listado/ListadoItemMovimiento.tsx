import { Presupuesto } from '../../types/presupuesto';
import { formatearFecha } from '../../helpers/formatearFecha';
import { IoReload } from "react-icons/io5";
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { useEffect } from 'react';
import { useMovimientoStore } from '../../hooks/useMovimientoStore';
import { Movimiento } from '../../types/movimiento';


export const ListadoItemMovimiento = ({fecha, producto, numeroComprobante, cantidad, precio}: Movimiento) => {
  return (
    <>
        <tr>
            <td>{formatearFecha(fecha)}</td>
            <td>{numeroComprobante}</td>
            <td>{producto.codigo}</td>
            <td>{producto.descripcion}</td>
            <td>{cantidad.toFixed(2)}</td>
            <td>{precio.toFixed(2)}</td>
            <td>{(precio * cantidad).toFixed(2)}</td>
            
        </tr>
    </>
  )
};
