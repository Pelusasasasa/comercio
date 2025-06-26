import { Usuario } from "../../types/usuario"
import { UsuarioListItem } from "./UsuarioListItem"

interface Props {
    usuarios: Array<Usuario> | []
}
export const UsuarioList = ({usuarios}: Props) => {
  return (
    <section className="border border-gray-200 bg-white rounded-sm mx-5 h-[calc(100vh-150px)] overflow-y-auto no-scroll">
        <h3 className="p-5 bg-yellow-100 font-medium text-xl">Total: {usuarios.length}</h3>
        <table className="w-full">
            <thead>
                <tr className="bg-gray-200">
                    <th className="text-gray-600 text-xs text-start p-2">Codigo</th>
                    <th className="text-gray-600 text-xs text-start p-2">Nombre Completo</th>
                    <th className="text-gray-600 text-xs text-start p-2">Telefono</th>
                    <th className="text-gray-600 text-xs text-start p-2">Email</th>
                    <th className="text-gray-600 text-xs text-start p-2">Permisos</th>
                    <th className="text-gray-600 text-xs text-start p-2">Estado</th>
                    <th className="text-gray-600 text-xs text-start p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map(usuario => (
                        <UsuarioListItem key={usuario._id} {...usuario}/>
                    ))
                }
            </tbody>
        </table>
    </section>
  )
}
