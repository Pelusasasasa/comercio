import { useVentaStore } from "../../hooks/useVentaStore";
import { ClienteFormState } from "../../types/cliente"


interface Props extends ClienteFormState{
    setBandera: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardClienteVenta = ({_id, codigo, nombre, saldo = 0, dni, telefono, direccion, setBandera}: Props) => {

    const { startTraerClienteParaVenta, startClearClientesParaVentas } = useVentaStore();

const saldoStyle = saldo >= 0 ? 'text-green-500' : 'text-red-500';

const clickCard = () => {
    setBandera(true);
    startTraerClienteParaVenta(codigo);
    startClearClientesParaVentas();
};

  return (
        <div onClick={clickCard} className="flex mb-1 hover:bg-yellow-200 border-b-1 border-gray-300 cursor-pointer px-1 justify-between">
            <div>
                <p className="text-sm font-bold text-[#8B4513]">Codigo {codigo} - {nombre}</p>
                <p className="text-xs text-gray-500">{dni} - {direccion} - {telefono}</p>
            </div>
            <div className="flex justify-center items-center">
                <p className={`text-sm whitespace-nowrap ${saldoStyle}`}>$ {saldo?.toFixed(2)}</p>
            </div>
        </div>
  )
}
