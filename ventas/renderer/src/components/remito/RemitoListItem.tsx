import { GoCalendar, GoPerson } from "react-icons/go"
import { Remito } from "../../types/remito"

interface Props extends Remito {

}

export const RemitoListItem = ({fecha, cliente, nombreCliente, tipoComprobante, numeroComprobante, observaciones}: Remito) => {
  return (
    <tr className="bg-white hover:bg-yellow-50 border border-gray-200 rounded-sm hover:cursor-pointer">
        <td className="py-2">
            <div className="flex gap-2 items-center">
                <GoCalendar className="text-gray-500"/>
                <p>{fecha.slice(0, 10).split('-', 3).reverse().join('/')}</p>    
            </div>    
        </td>
        <td className="py-2">
            <div className="flex gap-2 items-center">
                <GoPerson className="text-gray-500"/>
                <p>{cliente.codigo}</p>
            </div>
        </td>
        <td className="py-2">
            <div className="flex gap-2 items-center">
                <GoPerson className="text-gray-500"/>
                <p>{nombreCliente}</p>
            </div>
        </td>

        <td className="py-2">
            <p className="inline-flex border rounded-sm px-1 bg-gray-200 border-gray-200">{numeroComprobante}</p>
        </td>

        <td>{observaciones}</td>
    </tr>
  )
}
