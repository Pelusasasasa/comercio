import React from 'react'
import { Producto } from '../../types/producto'
import { VscEdit } from 'react-icons/vsc';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useVentaStore } from '../../hooks/useVentaStore';

interface Props extends Producto {
  cantidad?: string;
}

export const ProductoItem = ({_id, codigo, descripcion, cantidad, iva, precio}: Props) => {

  const { startDeleteProductoAVentaActiva } = useVentaStore();
  
  const deleteProducto = () => {
    _id && startDeleteProductoAVentaActiva(_id);
  }

  return (
    <tr className="bg-white hover:bg-yellow-50 border border-gray-200 rounded-sm hover:cursor-pointer">
                    <td className="py-2">{codigo}</td>
                    <td className="py-2">{cantidad ? parseFloat(cantidad).toFixed(2) : '0.00'}</td>
                    <td className="py-2 whitespace-normal max-w-[200px] break-words px-1">
                        {descripcion}
                    </td>
                    <td>{iva}</td>
                    <td className="py-2">{precio.toFixed(2)}</td>
                    <td className="py-2">{(precio * (cantidad ? parseFloat(cantidad) : 1)).toFixed(2)}</td>
                    <td>
                        <div className="flex items-center justify-around h-full">
                            <VscEdit size={20} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 `}/>
                            <RiDeleteBin5Line onClick={deleteProducto} size={20} className={`rounded-sm hover:bg-gray-400 hover:text-gray-600 cursor-pointer text-red-600 `}/>
                        </div>
                    </td>
                    <td>
                        <textarea className="border border-gray-300 rounded-sm w-full text-xs px-2" rows={3} name="" id="">Nro Series...</textarea>
                    </td>
                </tr>
  )
}
