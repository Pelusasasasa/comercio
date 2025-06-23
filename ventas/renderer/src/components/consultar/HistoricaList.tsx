import { useEffect } from "react";
import { useHistoricaStore } from "../../hooks/useHistoricaStore";
import { useClienteStore } from "../../hooks/useClienteStore";
import { HistoricaListItem } from "./HistoricaListItem";

interface Props {
    tipoCuenta?: string;  
    setTipoCuenta: (tipoCuenta: string) => void;
  }
  
  const historicas = [];

export const HistoricaList = ({setTipoCuenta}: Props) => {

  const { clienteActive } = useClienteStore();
  const { historicas, startSetHistoricas } = useHistoricaStore();

  useEffect(() => {
    clienteActive && startSetHistoricas(clienteActive._id);
  }, [])

    if(historicas?.length === 0) return (
    <section className="h-[calc(100vh-500px)] overflow-y-auto flex justify-center items-center bg-white border-gray-400 mx-1 border rounded-lg">
      <p className="text-2xl text-gray-500">No hay Historicas</p>
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
                <th>Debe</th>
                <th>Haber</th>
                <th>Saldo</th>
                <th>Observacion</th>
              </tr>
            </thead>
            <tbody>
                {
                  historicas.map((historica) => (
                    <HistoricaListItem key={historica._id} {...historica}/>
                  ))
                }
            </tbody>
          </table>
        </section>
  )
}
