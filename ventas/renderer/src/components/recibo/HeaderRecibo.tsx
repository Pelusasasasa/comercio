import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

import { useClienteStore } from "../../hooks/useClienteStore";
import { Button } from "../Button";
import { GoSearch } from "react-icons/go";
import { ModalReciboCliente } from "./ModalReciboCliente";
import { useDispatch } from "react-redux";
import { clearRecibos } from "../../store/recibo/reciboSlice";


export const HeaderRecibo = () => {
    
    const { clienteActive, traerClientePorCodigo } = useClienteStore();

    const [openModal, setOpenModal] = useState(false);
    const [ clienteCodigo, setClienteCodigo] = useState<string>('');

    const saldo = clienteActive?.saldo ?? 0

    const handleCliente = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 13){
            traerClientePorCodigo(clienteCodigo)
        }
    };

    const searchCliente = () => {
        traerClientePorCodigo(clienteCodigo)
    }

    const saldoStyle = () => saldo > 0 ? 'text-red-500' : 'text-green-500';

return (
    <header className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8">
        <div className="flex bg-white m-2 flex-col border border-gray-200 rounded-md py-2 md:col-span-2">
            <label className="font-medium text-sm px-2" htmlFor="">Buscar Cliente</label>
            <div className="flex gap-2 items-center px-2">
                <input type="text" value={clienteCodigo} onChange={(e) => setClienteCodigo(e.target.value)} onKeyDown={handleCliente} autoFocus className="border flex-1 border-gray-200 rounded-md text-center p-1"/>
                <GoSearch onClick={searchCliente} className="bg-yellow-400 p-1 text-white rounded-md cursor-pointer hover:bg-yellow-500" size={30}/>
            </div>
        </div>

        <div className="flex bg-white m-2 flex-col border border-gray-200 rounded-md py-2 col-span-2 md:col-span-2 lg:col-span-4">
            <label className="font-medium text-sm px-2" htmlFor="">Cliente</label>
            <h3 className="px-2 font-bold text-xl">{clienteActive ? clienteActive.nombre.slice(0,30) : ''}</h3>
        </div>

        <div className="flex bg-white m-2 flex-col border border-gray-200 rounded-md py-2 col-span-1 md:col-span-1">
            <label className="font-medium text-sm px-2" htmlFor="">Saldo</label>
            <h3 className={`${saldoStyle()} px-2 font-medium  text-xl`}>{clienteActive ? clienteActive.saldo?.toFixed(2) : '0.00'}</h3>
        </div>

        <div className="flex px-2 justify-center items-center gap-2 bg-white border border-gray-200 rounded-md py-2 m-2 col-span-1 md:col-span-1   flex-col">
            <Button text={'Mas Datos'} disabled={!clienteActive} type="secondary" click={() => setOpenModal(true)} icon={ <IoPersonOutline/>} />
        </div>

        {
            openModal && (
                <ModalReciboCliente setOpenModal={setOpenModal}/>
            )
        }
    </header>
  )
}
