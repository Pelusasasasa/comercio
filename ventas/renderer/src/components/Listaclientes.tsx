import { ClienteRow, clienteProps } from './ClienteRow'

const clientes: clienteProps[] = [
    {
        nombre: 'Agustin',
        codigo: 1,
        direccion: "Saenz Peña 3975",
        telefono: "3456445977",
        dni: "41630584",
        condicionIva: "CONSUMIDOR FINAL",
        saldo: 0

    }
]
export const Listaclientes = () => {
  return (
    <div className='h-screen mx-2 border border-gray-200 rounded-md'>
        <div className='bg-yellow-100 p-2'>
            <h3 className='mx-10 my-2 font-medium text-xl'>Total: {clientes.length} Clientes</h3>
        </div>
        <table className='w-full'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='text-gray-600 text-center'>Codigo</th>
                    <th className='text-gray-600 text-center'>Nombre</th>
                    <th className='text-gray-600 text-center'>Direccion</th>
                    <th className='text-gray-600 text-center'>Telefono</th>
                    <th className='text-gray-600 text-center'>CUIT</th>
                    <th className='text-gray-600 text-center'>Condicion Iva</th>
                    <th className='text-gray-600 text-end'>Saldo</th>
                    <th className='text-gray-600 text-center'>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    clientes.map(elem => (
                        <ClienteRow key={elem.codigo} {...elem}/>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
