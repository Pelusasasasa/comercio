import { useEffect, useState } from "react";
import { useCompensadaStore } from "../../hooks/useCompensadaStore"
import { useClienteStore } from "../../hooks/useClienteStore";
import { ReciboListItem } from "./ReciboListItem";

interface Props {
    pagoRapido: number;
}

const ReciboList = ({pagoRapido}: Props) => {

    const { compensadas, startTraerCuentaPorCliente} = useCompensadaStore();
    const { clienteActive } = useClienteStore();
    const [ compensadasConPago, setCompensadasConPago ] = useState(compensadas)


    useEffect(() => {
        clienteActive && startTraerCuentaPorCliente(clienteActive._id)
    }, [clienteActive]);



  return (
        <section className="h-[calc(100vh-300px)] overflow-y-auto bg-white border-gray-300 mx-1 border rounded-lg">
            <h3 className="bg-yellow-100 font-medium p-2">Cuentas Pediente de Pago</h3>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className=''>
                <tr className='transition-colors text-center hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 text-xs text-gray-700 uppercase dark:text-gray-400 h-8'>
                    <th>Fecha</th>
                    <th>Numero</th>
                    <th>Tipo Comprobante</th>
                    <th>Importe</th>
                    <th>Pagado</th>
                    <th>Saldo</th>
                </tr>
                </thead>
                <tbody>
                    {
                        compensadasConPago.map(compensada => (
                            <ReciboListItem key={compensada._id} {...compensada} />
                        ))
                    }
                </tbody>
            </table>
        </section>
  )
}

export default ReciboList