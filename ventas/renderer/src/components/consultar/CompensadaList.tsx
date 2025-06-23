import { useEffect } from "react";
import { useCompensadaStore } from "../../hooks/useCompensadaStore"
import { useClienteStore } from "../../hooks/useClienteStore";
import { CompensadaListItem } from "./CompensadaListItem";

interface Props {
  tipoCuenta?: string;  
  setTipoCuenta: (tipoCuenta: string) => void;
}

const CompensadaList = ({tipoCuenta, setTipoCuenta}: Props) => {

  const { compensadas, startTraerCuentaPorCliente } = useCompensadaStore();
  const { clienteActive } = useClienteStore();

  useEffect(() => {
    clienteActive && startTraerCuentaPorCliente(clienteActive._id);
  }, [clienteActive]);

  if(compensadas?.length === 0) return (
    <section className="h-[calc(100vh-500px)] overflow-y-auto flex justify-center items-center bg-white border-gray-400 mx-1 border rounded-lg">
      <p className="text-2xl text-gray-500">No hay Compensadas</p>
    </section>
  );


  return (    
    <section className="h-[calc(100vh-500px)] overflow-y-auto bg-white border-gray-400 mx-1 border rounded-lg">
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className=''>
          <tr className='transition-colors text-center hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 text-xs text-gray-700 uppercase dark:text-gray-400 h-8'>
            <th>Fecha</th>
            <th>Numero</th>
            <th>Cliente</th>
            <th>Tipo Comprobante</th>
            <th>Importe</th>
            <th>Pagado</th>
            <th>Saldo</th>
            <th>Observacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
            {
              compensadas?.map(compensada => (
                <CompensadaListItem {...compensada} key={compensada._id}/>
              ))
            }
        </tbody>
      </table>
    </section>
  )
}

export default CompensadaList