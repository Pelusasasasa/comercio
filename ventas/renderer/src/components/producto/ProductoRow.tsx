import { RiDeleteBin5Line } from "react-icons/ri"
import { VscEdit } from "react-icons/vsc"
import Swal from "sweetalert2";
import { useProductoStore } from "../../hooks/useProductoStore";


export const ProductoRow = ({_id, codigo, descripcion, precio, marca, stock, provedor, codigoFabrica, observaciones}) => {
    const { borrarProducto } = useProductoStore();
    
    const handleDelete = async() => {
        const { isConfirmed } = await Swal.fire({
            title: `Seguro que quiere eliminar el prodcto ${descripcion}?`,
            confirmButtonText: 'Aceptar',
            showCancelButton: true
        });

        if(isConfirmed){
            borrarProducto(_id);
        }
    };

    const handleUpdate = async() => {
        //1. Pasar al menu de modificar 
    };

return (
    <tr className="text-center bg-white bgTr border border-gray-200 rounded-sm">
        <td className="py-2">{codigo}</td>
        <td>{descripcion}</td>
        <td>{precio.toFixed(2)}</td>
        <td>{marca}</td>
        <td>{stock.toFixed(2)}</td>
        <td>{provedor}</td>
        <td>{codigoFabrica}</td>
        <td>{observaciones}</td>
        <td>
            <div className="flex items-center justify-around h-full">
                <VscEdit size={20}  className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400`}/>
                <RiDeleteBin5Line size={20} onClick={handleDelete} className={`rounded-sm hover:text-gray-600 cursor-pointer text-red-600 hover:bg-gray-400`}/>
            </div>
        </td>
    </tr>
  )
}
