import { RiDeleteBin5Line } from "react-icons/ri"
import { VscEdit } from "react-icons/vsc"
import { GoHistory } from "react-icons/go";

import Swal from "sweetalert2";
import { useProductoStore } from "../../hooks/useProductoStore";

interface Props {
    _id: string,
    codigo: string,
    descripcion: string,
    precio: number,
    marca: {
        _id: string,
        nombre: string
    },
    stock: number,
    stockMinimo: number,
    provedor: {
        _id: string,
        nombre: string
    },
    codigoFabrica: string,
    observaciones: string,
    setButtonActive: (value: string) => void;
    setModalMov: (value: boolean) => void;
    modalMov: (value: string) => void;
};


export const ProductoRow = ({_id, codigo, descripcion, precio, marca, stock, stockMinimo, provedor, codigoFabrica, observaciones, setButtonActive, setModalMov} : Props) => {
    const { startBorrarProducto, setProductoActivo } = useProductoStore();

    const stockStyles = () => {

        if(0 > stock) return 'border-red-500 border rounded-xl bg-red-100 text-red-800'
        if(stockMinimo >= stock) return 'border-yellow-500 border rounded-xl bg-yellow-100 text-yellow-800'
        if(stockMinimo < stock) return 'border-green-500 border rounded-xl bg-green-100 text-green-800'
    };
    
    const handleDelete = async() => {
        const { isConfirmed } = await Swal.fire({
            title: `Seguro que quiere eliminar el prodcto ${descripcion}?`,
            confirmButtonText: 'Aceptar',
            showCancelButton: true
        });

        if(isConfirmed){
            startBorrarProducto(_id);
        }
    };

    const handleUpdate = async() => {
        setProductoActivo(_id)
        setButtonActive('agregar');
    };

    const handleMovimiento = async() => {   
        setProductoActivo(_id)
        setModalMov(true);
    };

return (
    <tr className="text-center bg-white bgTr border border-gray-200 rounded-sm">
        <td className="py-2">{codigo}</td>
        <td>{descripcion}</td>
        <td>$ {precio.toFixed(2)}</td>
        <td>
            <p className={`${marca && 'border-blue-500 border'} rounded-xl bg-blue-100 text-blue-800 mr-2 text-sm`}>{marca?.nombre}</p>
        </td>
        <td className="text-sm text-gray-600">{provedor?.nombre}</td>
        <td>
            <p className={stockStyles()}>
                {stock.toFixed(2)}
            </p>
        </td>
        <td>{codigoFabrica}</td>
        <td>{observaciones}</td>
        <td>
            <div className="flex items-center justify-around h-full">
                <GoHistory  onClick={handleMovimiento} size={20} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400`}/>
                <VscEdit onClick={handleUpdate} size={20}  className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400`}/>
                <RiDeleteBin5Line size={20} onClick={handleDelete} className={`rounded-sm hover:text-gray-600 cursor-pointer text-red-600 hover:bg-gray-400`}/>
            </div>
        </td>
    </tr>
  )
}
