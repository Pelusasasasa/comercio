import { ClienteRow } from './ClienteRow'


export const Listaclientes = ({clientes, setButtonActive}) => {
  return (
    <div className='min-h-[calc(100vh-150px)] mx-2 border bg-white border-gray-200 rounded-md'>
        <h3 className='text-2xl p-5 bg-chocolate-200'>Total: {clientes.length} Clientes</h3>
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
                        <ClienteRow key={elem.codigo} {...elem} setButtonActive={setButtonActive}/>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
