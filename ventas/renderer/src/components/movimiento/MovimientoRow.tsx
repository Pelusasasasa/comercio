import { trasnsformarHoraMenos3 } from "../../helpers/toISOStringUTCMinus3"

export const MovimientoRow = ({_id, fecha, producto, tipo, cantidad, stockAntes, stockAhora, numeroComprobante, creadoPor, detalle}) => {
    
    
    const tipoStyles = () => {

        if(tipo === 'COMPRA') return 'border-green-500 border rounded-xl bg-green-100 text-green-800'
        if(tipo === 'SUMA') return 'border-blue-500 border rounded-xl bg-blue-100 text-blue-800'
        return 'border-red-500 border rounded-xl bg-red-100 text-red-800'
    }

  return (
    <tr className='text-sm text-center bg-white bgTr cursor-pointer border border-gray-200 rounded-sm'>
        <td className='py-2'>{trasnsformarHoraMenos3(fecha)}</td>
        <td>{producto.descripcion}</td>
        <td>
            <p className={`${tipoStyles()}`}>{tipo}</p>
        </td>
        <td>{cantidad.toFixed(2)}</td>
        <td>{stockAntes?.toFixed(2)}</td>
        <td>{stockAhora?.toFixed(2)}</td>
        <td>{numeroComprobante}</td>
        <td>{creadoPor.nombre}</td>
        <td>{detalle}</td>
    </tr>
  )
}
