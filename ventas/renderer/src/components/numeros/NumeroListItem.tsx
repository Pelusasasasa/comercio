
import { useNumeroStore } from "../../hooks"
import { Numero } from "../../types/numero"
import { VscEdit } from "react-icons/vsc";
import Swal from "sweetalert2";


export const NumeroListItem = ({_id, tipo, prefijo, puntoVenta, numero} : Numero) => {
    const { isSavingNumero, startModificarNumero } = useNumeroStore();

    const handleUpdateNumero = async() => {
        const {isConfirmed, value} = await Swal.fire({
            title: 'Moficar Punto Venta',
            input: 'text',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            inputValue: puntoVenta
        });

        if(isConfirmed){
            startModificarNumero({
                _id,
                tipo,
                puntoVenta: value,
                prefijo,
                numero
            })   
        }
    }
    
  return (
    <tr>
        <td className="text-start px-2 text-xs py-2">{tipo}</td>
        <td className="text-start px-2 text-xs py-2">
            <p className="border border-blue-600 text-blue-700 bg-blue-100 font-semibold px-2.5 rounded-full inline-flex py-0.5">{prefijo}</p>
        </td>
        <td className="text-start px-2 text-xs py-2">{puntoVenta.toString().padStart(4,'0')}</td>
        <td className="text-start px-2 text-xs py-2">{numero.toString().padStart(8,'0')}</td>
        <td className="text-start px-2 text-xs py-2">{`${prefijo}-${puntoVenta.toString().padStart(4,'0')}-${numero.toString().padStart(8,'0')}`}</td>
        <td className="text-start px-2 text-xs py-2">
            <div className="flex items-center justify-start h-full">
                <VscEdit size={20} onClick={handleUpdateNumero} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 ${isSavingNumero ? 'hidden' : 'block'}`}/>
            </div>
        </td>
    </tr>
  )
}
