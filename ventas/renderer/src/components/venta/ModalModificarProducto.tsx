import React, { SetStateAction } from 'react'
import { Button } from '../Button'
import { useVentaStore } from '../../hooks/useVentaStore'
import { useForm } from '../../hooks/Useform'
import { ProductoActivo } from '../../types/producto'

interface Props {
  setModalModificarProducto: React.Dispatch<SetStateAction<Boolean>>
};

const initialState = {
  cantidad: 0,
  iva: 0,
  precio: 0
}

export const ModalModificarProducto = ({setModalModificarProducto}: Props) => {

  const { productoActivo, startModficarProductoDeVenta } = useVentaStore();

  const { cantidad, iva, precio, formState, onInputChange } = useForm(productoActivo ?? initialState)

  const modificarProductoVenta = ()   => {
    startModficarProductoDeVenta({
      ...productoActivo, 
      cantidad: (formState.cantidad),
      precio: parseFloat(formState.precio as unknown as string),
      iva: parseFloat(formState.iva as unknown as string)
      
    } as ProductoActivo);

    setModalModificarProducto(false);

  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
         <div className="bg-white p-6 rounded shadow-md text-center w-sm">
          <h3>{productoActivo?.descripcion}</h3>
           <form >
            <div className='bg-white flex flex-col gap-5'>
              <div className='flex flex-col'>
                  <label htmlFor="cambioCantidad" className='font-medium mb-1'>Cambio de Cantidad</label>
                  <input type="number" name="cantidad" id="cambioCantidad" className='border border-gray-400 rounded-sm p-1' value={cantidad} onChange={onInputChange}/>
              </div>
              <div className='flex flex-col'>
                  <label htmlFor="cambioIva" className='font-medium mb-1'>Cambio de Iva</label>
                  <input type="number" name="iva" id="cambioIva" className='border border-gray-400 rounded-sm p-1' value={iva} onChange={onInputChange}/>
              </div>
              <div className='flex flex-col'>
                  <label htmlFor="cambioPrecio" className='font-medium mb-1'>Cambio de Precio</label>
                  <input type="number" name="precio" id="cambioPrecio" className='border border-gray-400 rounded-sm p-1' value={precio} onChange={onInputChange}/>
              </div>
            </div>
           </form>

           <div className='flex w-50 ml-auto mt-10 gap-5'>
              <Button text='Cancelar' click={() => setModalModificarProducto(false)} type='secondary'/>
              <Button text='Aceptar' click={modificarProductoVenta}/>
            </div>
         </div>
       </div>
  )
}
