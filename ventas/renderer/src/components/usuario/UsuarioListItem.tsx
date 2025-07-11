
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useUsuarioStore } from '../../hooks';
import { Usuario } from '../../types/usuario';
import { GoPerson } from 'react-icons/go';
import { VscEdit } from "react-icons/vsc";
import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";


import Swal from 'sweetalert2';

interface Props extends Usuario {
    setAddUsuario: React.Dispatch<React.SetStateAction<boolean>>
}

export const UsuarioListItem = ({_id, codigo, nombre, permiso, telefono, email,  activo, creadoPor, setAddUsuario}: Props) => {

    const { isSavingUsuario, startEliminarUsuario, activeUsuario} = useUsuarioStore()

    const estadoStyle = activo 
        ? 'text-xs text-green-800 bg-green-200 border border-green-600 rounded-full inline-flex px-2 py-1' 
        : 'text-xs text-red-800 bg-red-200 border border-red-600 rounded-full inline-flex px-2 py-1';

        const permisosActivos = Object.keys(permiso).filter(key => permiso[key]);
        

    const handleUpdateUsuario = () => {
        _id && activeUsuario({_id, codigo, nombre, permiso, telefono, email, activo});
        setAddUsuario(true)
    };  

    const handleDeleteUsuario = async() => {
        const { isConfirmed } = await Swal.fire({
            title: `Quiere Eliminar al usuario ${nombre}?`,
            confirmButtonText: 'Aceptar',
            showCancelButton: true
        });

        if(isConfirmed){
            _id && startEliminarUsuario(_id)
        }
    };


  return (
    <tr className='border border-gray-200'>
        <td className='text-start px-2 font-bold text-xs py-5'>{codigo}</td>
        <td>
            <div className='flex items-center gap-2'>
                <GoPerson className='text-gray-500'/>
                <p className='font-medium'>{nombre}</p>
            </div>
        </td>
        <td>
            <div className='flex items-center gap-2'>
                <AiOutlinePhone className='text-gray-500'/>
                <p className='font-medium'>{telefono}</p>
            </div>
        </td>
        <td>
            <div className='flex items-center gap-2'>
                <CiMail className='text-gray-500'/>
                <p className='font-medium'>{email}</p>
            </div>
        </td>
        <td className=''>
            <div className='grid grid-cols-3 gap-2 mx-2 w-xs'>
                {permisosActivos.map(permiso => (
                    <p key={permiso} className='border-green-600 text-center border text-green-800 bg-green-200 rounded-full px-2 py-1 text-xs'>{permiso}</p>
                ))}
            </div>
        </td>
        <td className=' py-5'>
            <p className={`${estadoStyle}`}>{activo ? 'Activo' : 'Inactivo' }</p>
        </td>
        <td className="text-start px-2 text-xs py-2">
            <div className="flex items-center justify-start gap-5 h-full">
                <VscEdit size={20} onClick={handleUpdateUsuario} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 ${isSavingUsuario ? 'hidden' : 'block'}`}/>
                <RiDeleteBin5Line onClick={handleDeleteUsuario} size={20} className={`rounded-sm hover:bg-gray-400 hover:text-gray-800 cursor-pointer text-red-600  ${isSavingUsuario ? 'hidden' : 'block'}`}/>
            </div>
        </td>
    </tr>
  )
}
