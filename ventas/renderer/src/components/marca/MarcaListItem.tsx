import { GoTag } from "react-icons/go";


export const MarcaListItem = ({nombre, descripcion, estado, fechaCreacion}) => {
  return (
    <tr className='border border-gray-200'>
        <td className='text-start px-2 font-bold text-xs py-2'>
            <div className=" flex gap-2">
                <GoTag className="text-yellow-400" size={20}/>
                <p className="text-bold">{nombre}</p>
            </div>
        </td>
        <td className='text-start px-2 font-semibold text-xs py-5'>{descripcion}</td>
    </tr>
  )
}
