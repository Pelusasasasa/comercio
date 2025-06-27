import React from 'react'
import { GoCalendar, GoTag } from 'react-icons/go'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { VscEdit } from 'react-icons/vsc'
import { useCategoriaStore } from '../../hooks/useCategoriaStore'
import Swal from 'sweetalert2'
import { Categoria } from '../../types/categoria'

interface Props extends Categoria{
  setHandleCategoria: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CategoriaListItem = ({_id, nombre, descripcion, activo, fechaCreacion, setHandleCategoria}: Props) => {

  const  { isSavingCategoria, startEliminarCategoria, activarCategoria} = useCategoriaStore();

  const activoStyle = activo ? 'bg-green-50 text-green-700 border-green-600' : 'bg-red-50 text-red-700 border-red-600';

  const handleUpdateCategoria = () => {
    _id && activarCategoria(_id);
    setHandleCategoria(true)
  };

  const handleDeleteCategoria = async() => {
    const { isConfirmed } = await Swal.fire({
      title: `Seguro quiere Eliminar la categoria ${nombre}`,
      confirmButtonText: 'Aceptar',
      showCancelButton: true
    });

    if(isConfirmed){
      _id && startEliminarCategoria(_id);
    }
  };

  return (
    <tr>
        <td className='text-start px-2 font-bold text-xs py-2'>
                    <div className=" flex gap-2">
                        <GoTag className="text-yellow-400" size={20}/>
                        <p className="text-bold">{nombre}</p>
                    </div>
                </td>
                <td className='text-start px-2 font-semibold text-gray-500 text-xs py-5'>{descripcion}</td>
                <td>
                  <p className="border-blue-600 border bg-blue-100 text-blue-700 font-semibold items-center inline-flex rounded-full px-2 text-xs">{0}</p>
                </td>
                <td>
                  <div className="flex gap-2 items-center">
                    <GoCalendar size={20} className="text-gray-500"/>
                    <p className="text-gray-600">{fechaCreacion?.slice(0,10).split('-',3).reverse().join('/')}</p>
                  </div>
                </td>
                <td>
                  <p className={`border text-xs inline-flex rounded-full px-2 ${activoStyle}`}>{activo ? 'Activo' : 'Inactivo'}</p>
                </td>
                <td className="text-start px-2 text-xs py-2">
                  <div className="flex items-center justify-start gap-5 h-full">
                    <VscEdit size={20} onClick={handleUpdateCategoria} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 ${isSavingCategoria ? 'hidden' : 'block'}`}/>
                    <RiDeleteBin5Line onClick={handleDeleteCategoria} size={20} className={`rounded-sm hover:bg-gray-400 hover:text-gray-800 cursor-pointer text-red-600  ${isSavingCategoria ? 'hidden' : 'block'}`}/>
                  </div>
                </td>
    </tr>
  )
}
