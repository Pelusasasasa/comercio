    import { useState } from "react";
import Swal from "sweetalert2";

import { IoCloseOutline } from "react-icons/io5";
import { LuCreditCard } from "react-icons/lu";
import { TbCashBanknote } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiBank } from "react-icons/ci";
import { Button } from "../Button";
import { useReciboStore } from "../../hooks/useReciboStore";
import { useNavigate } from "react-router-dom";
import { useClienteStore, useCompensadaStore } from "../../hooks";

interface Props {
    setModalReciboPago: React.Dispatch<React.SetStateAction<boolean>>;
    setChequeModal: React.Dispatch<React.SetStateAction<boolean>>;
    setTarjetaModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalReciboPago = ({setModalReciboPago, setChequeModal, setTarjetaModal}: Props) => {
    const navigate = useNavigate();
    const {reciboActive, startAgregarRecibo, reiniciarReciboState} = useReciboStore();
    const {reiniciarClienteState} = useClienteStore();
    const { reiniciarCompensadaState } = useCompensadaStore();
    
    const [medioActive, setMedioActive] = useState<string | null>(null);    
    

    const hacerRecibo = async() => {
        if(!medioActive){
            await Swal.fire('Seleccione un medio de pago', '', 'warning');
            return;
        };

        if(medioActive === 'efectivo'){
            reciboActive && startAgregarRecibo(reciboActive, 'EFECTIVO');
            reiniciarReciboState();
            reiniciarClienteState();
            reiniciarCompensadaState();
            navigate(-1);
            
        };

        if(medioActive === 'cheque'){
            setChequeModal(true);
        }

        if(medioActive === 'tarjeta'){
            setTarjetaModal(true);
        };

        if(medioActive === 'transferencia'){
            const {isConfirmed, value} = await Swal.fire({
                title: 'Monto de la transferencia?',
                input: 'number',
                inputValue: reciboActive?.importe || 0,
                showCancelButton: true,
                confirmButtonText: 'Aceptar'
            });

            if(isConfirmed){
                reciboActive && startAgregarRecibo(reciboActive, 'TRANSFERENCIA');
                reiniciarReciboState();
                reiniciarClienteState();
                reiniciarCompensadaState();
                navigate(-1);
            }
        };

        setModalReciboPago(false);
    }
    
return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80">
            <div className="bg-white p-6 rounded shadow-md text-center w-xl">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center p-4 rounded-md">
                        <div className="flex items-center gap-2">
                            <LuCreditCard className="text-yellow-500" size={20}/>
                            <h3 className="text-xl font-medium">Confirmar Recibo</h3>
                        </div>

                        <IoCloseOutline size={20} className="hover:border hover:border-gray-500 cursor-pointer rounded-sm"/>
                    </div>
                    <p className="text-gray-600 text-start">Seleccione el medio de pago y confirme los datos del recibo</p>
                </div>

                <div className="flex flex-col gap-4 mt-4 border rounded-sm border-gray-200 p-4">
                    <h3 className="text-start font-medium">Resumen del Recibo</h3>
                    <div className="flex justify-between">
                        <p>Cliente</p>
                        <p className="font-medium">{reciboActive?.codigoCliente?.nombre}</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Total a Pagar: </p>
                        <p className="font-medium text-green-600">${reciboActive?.importe.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Cuentas Afectadas</p>
                        <p className="font-medium">{reciboActive?.items?.length}</p>
                    </div>
                </div>

                <div className="mt-2 flex flex-col gap-4">
                    <h3 className="text-start font-medium">Medios de pago</h3>

                    <div className="grid grid-cols-2 gap-5">
                        <div className={`${medioActive === 'efectivo' ? 'bg-yellow-500 hover:bg-yellow-400 text-white' : 'hover:bg-gray-100'} flex items-center gap-2 p-2 border rounded-md hover:bg-gray-100 cursor-pointer`} onClick={() => setMedioActive("efectivo")}>
                            <TbCashBanknote/>
                            <p>Efectivo</p>
                        </div>

                        <div className={`${medioActive === 'cheque' ? 'bg-yellow-500 hover:bg-yellow-400 text-white' : 'hover:bg-gray-100'} flex items-center gap-2 p-2 border rounded-md hover:bg-gray-100 cursor-pointer`} onClick={() => setMedioActive("cheque")}>
                            <IoDocumentTextOutline/>
                            <p>Cheque</p>
                        </div>
                        <div className={`${medioActive === 'transferencia' ? 'bg-yellow-500 hover:bg-yellow-400 text-white' : 'hover:bg-gray-100'} flex items-center gap-2 p-2 border rounded-md hover:bg-gray-100 cursor-pointer`} onClick={() => setMedioActive('transferencia')}>
                            <CiBank/>
                            <p>Transferencia</p>
                        </div>
                        <div className={`${medioActive === 'tarjeta' ? 'bg-yellow-500 hover:bg-yellow-400 text-white' : 'hover:bg-gray-100'} flex items-center gap-2 p-2 border rounded-md hover:bg-gray-100 cursor-pointer`} onClick={() => setMedioActive('tarjeta')}>
                            <LuCreditCard/>
                            <p>Tarjeta</p>
                        </div>
                    </div>

                    <div className=" flex justify-end gap-2 mt-4 w-xs ml-auto">
                        <Button text="Cancelar" className="h-10 border-gray-400" type="secondary" click={() => setModalReciboPago(false)}/>
                        <Button text="Confirmar Recibo" className="h-10" click={hacerRecibo}/>
                    </div>
                </div>
            </div>
            </div>
)
}
