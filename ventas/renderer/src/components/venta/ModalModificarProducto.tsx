import React, { SetStateAction } from 'react'
import { Button } from '../Button'
import { useVentaStore } from '../../hooks/useVentaStore'

interface Props {
  setModalModificarProducto: React.Dispatch<SetStateAction<Boolean>>
}

export const ModalModificarProducto = ({setModalModificarProducto}: Props) => {

  const { productoActivo } = useVentaStore();

  console.log(productoActivo)

  const modificarProductoVenta = ()   => {

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
         <div className="bg-white p-6 rounded shadow-md text-center w-xl">
          <h3>{productoActivo?.descripcion}</h3>
           <form >
            <div className='bg-white flex flex-col gap-5'>
              <div className='flex flex-col'>
                  <label htmlFor="cambioCantidad" className='font-medium mb-1'>Cambio de Cantidad</label>
                  <input type="number" name="cambioCantidad" id="cambioCantidad" className='border border-gray-400 rounded-sm p-1'/>
              </div>
              <div className='flex flex-col'>
                  <label htmlFor="cambioIva" className='font-medium mb-1'>Cambio de Iva</label>
                  <input type="number" name="cambioIva" id="cambioIva" className='border border-gray-400 rounded-sm p-1'/>
              </div>
              <div className='flex flex-col'>
                  <label htmlFor="cambioPrecio" className='font-medium mb-1'>Cambio de Precio</label>
                  <input type="number" name="cambioPrecio" id="cambioPrecio" className='border border-gray-400 rounded-sm p-1'/>
              </div>
            </div>

            <div className='flex w-50 ml-auto mt-10 gap-5'>
              <Button text='Cancelar' click={() => setModalModificarProducto(false)} type='secondary'/>
              <Button text='Aceptar' click={modificarProductoVenta}/>
            </div>
           </form>
         </div>
       </div>
  )
}
