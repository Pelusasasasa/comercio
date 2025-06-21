import { GoSearch } from "react-icons/go";
import { useClienteStore } from "../../hooks/useClienteStore";
import { Button } from "../Button";

export const HeaderConsultar = () => {
    const { clienteActive, traerClientePorCodigo } = useClienteStore();

    const handleCliente = (e) => {
        if(e.keyCode === 13){
            traerClientePorCodigo(e.target.value)
        }
    };

    const saldoStyle = () => {
        if(clienteActive?.saldo ? clienteActive.saldo < 0 : false) return 'text-red-600';
        return 'text-green-600'
    }
  return (
    <header className="grid gap-1 grid-cols-1 md:grid-cols-4">
        <div className="flex bg-white m-5 flex-col border border-gray-200 rounded-md py-2">
            <label className="font-medium text-sm px-2" htmlFor="">Buscar Cliente</label>
            <div className="flex gap-2 items-center px-2">
                <input type="text" onKeyDown={handleCliente} autoFocus className="border flex-1 border-gray-200 rounded-md text-center p-1"/>
                <GoSearch className="bg-yellow-400 p-1 text-white rounded-md cursor-pointer hover:bg-yellow-500" size={30}/>
            </div>
        </div>

        <div className="flex bg-white m-5 flex-col border border-gray-200 rounded-md py-2">
            <label className="font-medium text-sm px-2" htmlFor="">Cliente</label>
            <h3 className="px-2 font-bold text-xl">{clienteActive ? clienteActive.nombre.slice(0,30) : ''}</h3>
        </div>

        <div className="flex bg-white m-5 flex-col border border-gray-200 rounded-md py-2">
            <label className="font-medium text-sm px-2" htmlFor="">Saldo</label>
            <h3 className={`${saldoStyle()} px-2 font-medium  text-xl`}>{clienteActive ? clienteActive.saldo?.toFixed(2) : '0.00'}</h3>
        </div>

        <div className="flex justify-center items-center gap-2 bg-white border border-gray-200 rounded-md py-2 m-5">
            <Button text={'Compensada'}/>
            <Button text={'Historica'} type={'secondary'}/>
        </div>
    </header>
  )
}
