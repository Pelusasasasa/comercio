import React from 'react'
import { Producto } from '../../types/producto'
import { useVentaStore } from '../../hooks/useVentaStore';

interface Props extends Producto {
  setBandera: React.Dispatch<React.SetStateAction<Boolean>>;
  pasarFoco: () => void;
}

export const CardProductoVenta = ({_id, codigo, descripcion, marca, categoria, stock, precio, setBandera, pasarFoco}: Props) => {

  const {startTraerProductoParaVenta, startClearProductosParaVentas} = useVentaStore();

    const clickCard = () => {
      setBandera(true);
      startTraerProductoParaVenta(_id);
      startClearProductosParaVentas();
      pasarFoco();
    };

  return (
    <div onClick={clickCard} className="flex mb-1 hover:bg-yellow-200 border-b-1 border-gray-300 cursor-pointer px-1 justify-between">
        <div>
            <p className='text-sm font-bold text-[#8B4513]'>{codigo} - {descripcion}</p>
            <p className='text-xs text-gray-500'>{marca?.nombre} - {categoria?.nombre} - {stock.toFixed(2)}</p>
        </div>

        <div className='flex justify-center items-center'>
            <p className='text-sm whitespace-nowrap text-green-500'>$ {precio.toFixed(2)}</p>

        </div>
    </div>
  )
}
