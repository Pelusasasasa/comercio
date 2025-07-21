import React, { useState } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { Movimiento, MovimientoAdd } from '../../types/movimiento'
import { useMovimientoStore } from '../../hooks'
import { trasnsformarHoraMenos3 } from '../../helpers'
import Swal from 'sweetalert2'
import { IoAddCircle } from 'react-icons/io5'

const tipos = ['SUMA', 'RESTA', 'COMPRA']

export const ModalMovimientoProductoItem = ({_id, fecha, tipo, producto, codigoCliente, cantidad, precio, stockAntes, stockAhora, nroSerie, numeroComprobante, creadoPor}: Movimiento) => {

    const { isSavingMovimiento, startEliminarMovimiento, startModiifcarSeriesMovimiento} = useMovimientoStore();
    const [series, setSeries] = useState<string>(nroSerie);
    
    const eliminarMovimiento = async() => {
        const { isConfirmed } = await Swal.fire({
            title: 'Seguro quiere Eliminar El movimineto',
            text: 'Esta accion no actualizara el stock',
            confirmButtonText: 'Aceptar',
            showCancelButton: true
        });

        if(isConfirmed && _id){
            startEliminarMovimiento(_id)
        }
    };

    const modificarSeries = async() => {
        const mov: MovimientoAdd = {
            _id,
            fecha,
            tipo,
            codigoCliente: codigoCliente,
            cantidad,
            stockAntes,
            stockAhora,
            nroSerie: series,
            numeroComprobante,
            precio,
            producto: producto._id,
            creadoPor: creadoPor._id
        }
        _id && startModiifcarSeriesMovimiento(mov);
    };

return (
    <tr className='text-center text-sm' key={_id}>
        <td className='py-2'>{trasnsformarHoraMenos3(fecha || '')}</td>
        <td>{tipo}</td>
        <td>{codigoCliente?.codigo.toString().padStart(4, '0')}</td>
        <td>{codigoCliente?.nombre}</td>
        <td>{cantidad.toFixed(2)}</td>
        <td>{stockAntes.toFixed(2)}</td>
        <td>{stockAhora.toFixed(2)}</td>
        <td>{numeroComprobante}</td>
        <td>{creadoPor.nombre}</td>
        <td><textarea className='border border-gray-300 rounded-lg px-1' name="" id="" value={series} onChange={(e) => {setSeries(e.target.value)}}>{nroSerie}</textarea></td>
        <td>
        {
        (
            <div className='flex justify-center'>
                {tipos.includes(tipo) && <MdDeleteOutline size={20} onClick={eliminarMovimiento} className={`rounded-full text-red-600 cursor-pointer hover:bg-red-400 ${isSavingMovimiento ? 'hidden' : 'block'}`}/>}
                { series.toUpperCase() !== nroSerie.toLocaleUpperCase() && <IoAddCircle size={20} onClick={modificarSeries} title='Guarda Series' className={`rounded-full text-green-600 cursor-pointer hover:bg-green-400 ${isSavingMovimiento ? 'hidden' : 'block'}`}/>}
            </div>
        )}
        </td>
    </tr>
  )
}
