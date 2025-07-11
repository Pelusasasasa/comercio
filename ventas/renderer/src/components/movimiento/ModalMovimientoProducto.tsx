import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { useMovimientoStore, useProductoStore } from '../../hooks'

interface Props {
  setModalMov: (arg: boolean) => void
}

export const ModalMovimientoProducto = ({ setModalMov }: Props) => {

  const {  movimientos, traerMovimientosPorProducto } = useMovimientoStore();
  const { productoActive } = useProductoStore();

  useEffect(() => {
    productoActive && traerMovimientosPorProducto(productoActive?._id);
  }, [])
  

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/80'>
      <div className='bg-white p-6 rounded shadow-md text-center w-5xl max-h-[80vh] overflow-y-auto'>
        <div className='flex-col flex items-start'>
          <div className='flex justify-between w-full'>
            <h3 className='font-medium text-xl'>Movimiento de {productoActive?.descripcion}</h3>
            <IoClose size={20} onClick={() => setModalMov(false)} className='cursor-pointer hover:text-gray-800 text-gray-600'/>
          </div>
          <p className='text-gray-700 '>Historial completo de movimientos de stock para este producto.</p>
        </div>
          <table className='w-full mt-5'>
          <thead>
            <tr className='border-gray-200 pb-2 border-b-2'>
              <th className='text-gray-600 text-center text-sm font-medium'>Fecha</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Tipo</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Cantidad</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Stock Anter</th>
              <th className='text-gray-600 text-center text-sm font-medium'>stock Ahora</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Comprobante</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Usuario</th>
              <th className='text-gray-600 text-center text-sm font-medium'>Observacion</th>
            </tr>
          </thead>
          <tbody>
            {
              movimientos.map(mov => (
                <tr className='text-center text-sm' key={mov._id}>
                  <td className='py-2'>{mov.fecha.slice(0, 10).split('-', 3).reverse().join('/') + " " + mov.fecha.slice(11,16)}</td>
                  <td>{mov.tipo}</td>
                  <td>{mov.cantidad.toFixed(2)}</td>
                  <td>{mov.stockAntes.toFixed(2)}</td>
                  <td>{mov.stockAhora.toFixed(2)}</td>
                  <td>{mov.numeroComprobante}</td>
                  <td>{mov.creadoPor.nombre}</td>
                  <td>{mov.detalle}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
