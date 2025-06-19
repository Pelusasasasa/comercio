import { RiDeleteBin5Line } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { useClienteStore } from "../hooks/useClienteStore";
import Swal from "sweetalert2";

export interface clienteProps {
  _id: string,
  codigo: number,
  nombre: string,
  direccion: string,
  telefono: string,
  dni: string,
  condicionIva: string,
  saldo: number,
  setButtonActive: (arg: string) => void
}


export const ClienteRow = ({_id, codigo, nombre, direccion, telefono, dni, condicionIva, saldo, setButtonActive}: clienteProps) => {
  const { borrarCliente, isSavingCliente, setActiveCliente } = useClienteStore();

  const condicionStyles:Record<string, string> = {
    'CONSUMIDOR FINAL':  'border-gray-500 border rounded-xl bg-gray-100 text-gray-800',
    'INSCRIPTO':  'border-blue-500 border rounded-xl bg-blue-100 text-blue-800',
    'MONOTRIBUTO':  'border-green-500 border rounded-xl bg-green-100 text-green-800',
    'EXENTO':  'border-orange-500 border rounded-xl bg-orange-100 text-orange-800',
  };

  const handleDeleteCliente = async () => {
    const { isConfirmed } = await Swal.fire({
      title: `Seguro quiere eliinar el cliente ${nombre}`,
      confirmButtonText: 'Aceptar',
      showCancelButton: true
    });

    if(isConfirmed){
      borrarCliente(_id);
    };
  };

  const handleUpdateCliente = async() => {
    setActiveCliente(_id);
    setButtonActive('modificar')
  };

  return (


    <tr className='text-center bg-white hover:bg-yellow-50 border border-gray-200 rounded-sm'>
        <td className='py-2'>{codigo}</td>
        <td>{nombre}</td>
        <td>{direccion}</td>
        <td>{telefono}</td>
        <td>{dni}</td>
        <td>
            <p className={condicionStyles[condicionIva] || ''}>{condicionIva}</p>
        </td>
        <td className={`${saldo === 0 ? 'text-green-600' : 'text-red-600'} text-end`}>{saldo?.toFixed(2)}</td>

        <td>
            <div className="flex items-center justify-around h-full">
                <VscEdit size={20} onClick={handleUpdateCliente} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 ${isSavingCliente ? 'hidden' : 'block'}`}/>
                <RiDeleteBin5Line onClick={handleDeleteCliente} size={20} className={`rounded-sm hover:bg-gray-400 hover:text-gray-600 cursor-pointer text-red-600  ${isSavingCliente ? 'hidden' : 'block'}`}/>
            </div>
        </td>

    </tr>
  )
}
