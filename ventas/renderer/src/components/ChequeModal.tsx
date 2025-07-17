import { IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";
import { useReciboStore } from "../hooks/useReciboStore";
import { useForm } from "../hooks/Useform";
import { Button } from "./Button";
import { toISOStringUTCMinus3 } from "../helpers";
import { Cheque } from "../types/cheque";
import { useState } from "react";
import { useChequeStore } from "../hooks/useChequeStore";

interface Props {
    setModalReciboPago?: React.Dispatch<React.SetStateAction<boolean>>;
    setChequeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: Cheque = {
    fechaRecibido: '',
    numero: '',
    banco: '',
    importe: 0,
    fechaDeposito: '',
    entragadoPor: '',
    entrgadoA: '',
    domicilio: '',
    telefono: '',
    observaciones: '',
    creadoPor: null,
    tipoComprobante: '',
}

export const ChequeModal = ({setModalReciboPago, setChequeModal}: Props ) => {

    const { reciboActive, startAgregarRecibo } = useReciboStore();
    const { startAgregarCheque } = useChequeStore();

    const [enviado, setEnviado ] = useState<Boolean>(false);
    
    const {fechaRecibido = toISOStringUTCMinus3(new Date()), codigoCliente, importe, banco, numero, fechaDeposito, telefono, domicilio, observaciones, formState, onInputChange } = useForm(reciboActive || initialState);

    const volverAtras = () => {
        setChequeModal(false);
        if(setModalReciboPago){
            setModalReciboPago(true);
        };
    };

    const hacerRecibo = () => {
        setEnviado(true)

        if(numero === '' || banco === '' || importe  === '' || codigoCliente  === '' || fechaDeposito  === '' || fechaRecibido === '') return;

        reciboActive && startAgregarRecibo(reciboActive);
        startAgregarCheque(formState as Cheque);
    };
return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
        <div className="bg-white p-6 rounded shadow-md text-center w-xl">
            <div className="flex flex-col">
                <div className="flex justify-between items-center px-4 pt-4 rounded-md">
                    <div className="flex items-center gap-2">
                        <IoDocumentTextOutline className="text-yellow-500" size={20}/>
                        <h3 className="text-xl font-medium">Detalles del Cheque</h3>
                        </div>
            
                    <IoCloseOutline size={20} className="hover:border hover:border-gray-500 cursor-pointer rounded-sm"/>
                </div>
                    <p className="text-gray-600 text-start">Complete los datos específicos del medio de pago seleccionado</p>
            </div>

            <form className="grid grid-cols-2 gap-5 mt-5">
                <div className="flex flex-col">
                    <label className="text-start font-medium" htmlFor="fechaRecibido">Fecha Recibimiento *</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="date" disabled value={fechaRecibido} name="fechaRecibido" id="fechaRecibido" />
                    { ( !fechaRecibido && enviado) && <p className="text-red-600 text-xs">La fecha de recibimiento es Obligatoria</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-start font-medium" htmlFor="fechaDeposito">Fecha de Vencimiento *</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="date" name="fechaDeposito" id="fechaDeposito" value={fechaDeposito}/>
                    { ( !fechaDeposito && enviado) && <p className="text-red-600 text-xs">La fecha de Vecimiento es Obligatoria</p>}
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-start font-medium" htmlFor="codigoCliente">Cliente *</label>
                    <input onChange={onInputChange}  className="border border-gray-300 rounded-sm p-2" type="text" value={codigoCliente?.nombre} name="codigoCliente" id="codigoCliente" />
                    { ( !codigoCliente._id && enviado) && <p className="text-red-600 text-xs">El Cliente es Obligatoria</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-start font-medium" htmlFor="importe">Importe *</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" value={importe}  type="text" name="importe" id="importe" />
                    { ( !importe && enviado) && <p className="text-red-600 text-xs">El importe es Obligatoria</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-start font-medium" htmlFor="banco">Banco *</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="text" name="banco" id="banco" value={banco} />
                    { ( !banco && enviado) && <p className="text-red-600 text-xs">El banco es Obligatoria</p>}
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-start font-medium" htmlFor="numero">Numero *</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" value={numero}  type="text" name="numero" id="numero" />
                    { ( !numero && enviado) && <p className="text-red-600 text-xs">El numero es Obligatoria</p>}
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-start font-medium" htmlFor="entregadoA">Entregado A</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="text" name="entregadoA" id="entregadoA" />
                </div>

                <div className="flex flex-col">
                    <label className="text-start font-medium" htmlFor="domicilio">Domicilio</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="text" name="domicilio" id="domicilio" value={domicilio} />
                </div>

                <div className="flex flex-col">
                    <label className="text-start font-medium" htmlFor="telefono">Telefono</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="text" name="telefono" id="telefono" value={telefono} />
                </div>

                <div className="flex flex-col col-span-2">
                    <label className="text-start font-medium" htmlFor="observaciones">Observaciones</label>
                    <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="text" name="observaciones" id="observaciones" value={observaciones} />
                </div>
            </form>

            <div className="flex mt-5 gap-5 w-sm ml-auto">
                <Button text="Volver" className="h-10 border-gray-500" click={volverAtras} type="secondary"/>
                <Button text="Aceptar" click={hacerRecibo}/>
            </div>
        </div>
    </div>
)
};
