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
    'CONSUMIDOR FINAL':  'border border-gray-300 rounded-lg text-center bg-gray-200',
    'INSCRIPTO':  'border bg-blue-300 text-blue-700 font-medium rounded-lg text-center',
    'MONOTRIBUTO':  'border bg-green-300 text-green-700 rounded-lg text-center',
    'EXENTO':  'border bg-orange-300 text-orange-700 rounded-lg text-center',
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
