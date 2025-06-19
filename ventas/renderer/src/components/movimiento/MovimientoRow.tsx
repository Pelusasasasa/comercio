export const MovimientoRow = ({_id, fecha, producto, tipo, cantidad, stockAntes, stockAhora, numeroComprobante, creadoPor, detalle}) => {
    
    const fechaParseada = fecha.slice(0, 10).split('-', 3).reverse().join('/') + " " + fecha.slice(11,16);
    
    const tipoStyles = () => {

        if(numeroComprobante === 'compra') return 'border-green-500 border rounded-xl bg-green-100 text-green-800'
        if(numeroComprobante === 'ajuste') return 'border-blue-500 border rounded-xl bg-blue-100 text-blue-800'
        return 'border-red-500 border rounded-xl bg-red-100 text-red-800'
    }

  return (
    <tr className='text-sm text-center bg-white bgTr cursor-pointer border border-gray-200 rounded-sm'>
        <td className='py-2'>{fechaParseada}</td>
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
