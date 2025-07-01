import { RiDeleteBin5Line } from "react-icons/ri"
import { VscEdit } from "react-icons/vsc";

const productos = []

export const TablaProductos = () => {

    const texto = 'qlokjnqpwnfqpifnqoginqwpfonqp'


    if(productos.length === 0) return(
        <section className="border border-gray-200 bg-white rounded-sm mx-5 h-[calc(70vh-200px)] overflow-y-auto no-scroll flex justify-center items-center">
            <p className="text-gray-500">No hay Productos Agregados</p>
        </section>
    )

  return (
    <section className="border border-gray-200 bg-white rounded-sm mx-5 h-[calc(70vh-200px)] overflow-y-auto no-scroll">
        <table className="w-full">
            <thead className="">
                <tr className="bg-gray-200">
                    <th className="text-gray-600 text-xs text-start p-2">Codigo</th>
                    <th className="text-gray-600 text-xs text-start p-2">Cantdad</th>
                    <th className="text-gray-600 text-xs text-start p-2">Descripcion</th>
                    <th className="text-gray-600 text-xs text-start p-2">Iva</th>
                    <th className="text-gray-600 text-xs text-start p-2">Preico U.</th>
                    <th className="text-gray-600 text-xs text-start p-2">Total</th>
                    <th className="text-gray-600 text-xs text-start p-2">Acciones</th>
                    <th className="text-gray-600 text-xs text-start p-2">Nro Series</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white hover:bg-yellow-50 border border-gray-200 rounded-sm hover:cursor-pointer">
                    <td className="py-2">6921734991720</td>
                    <td className="py-2">3.00</td>
                    <td className="py-2 whitespace-normal max-w-[200px] break-words px-1">
                        {texto}
                    </td>
                    <td>21.00</td>
                    <td className="py-2">500.00</td>
                    <td className="py-2">1500.00</td>
                    <td>
                        <div className="flex items-center justify-around h-full">
                            <VscEdit size={20} className={`rounded-sm text-gray-600 cursor-pointer hover:bg-gray-400 `}/>
                            <RiDeleteBin5Line  size={20} className={`rounded-sm hover:bg-gray-400 hover:text-gray-600 cursor-pointer text-red-600 `}/>
                        </div>
                    </td>
                    <td>
                        <textarea className="border border-gray-300 rounded-sm w-full text-xs px-2" rows={3} name="" id="">Nro Series...</textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
  )
}
