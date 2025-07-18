import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";

import { Tarjeta } from "../types/tarjeta";

import { useForm } from "../hooks/Useform";
import { useReciboStore } from "../hooks/useReciboStore";
import { useClienteStore, useCompensadaStore, useTarjetaStore, useTiposTarjetaStore } from "../hooks";

import { Button } from "./Button";

interface Props {
  setTarjetaModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalReciboPago: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: Tarjeta = {
  cliente: '',
  tipoTarjeta: '',
  importe: 0,
  tipoComprobante: '',
  cuotas: 0,
  recargo: 0,
  creadoPor: undefined
}

export const TarjetaModal = ({setTarjetaModal, setModalReciboPago}: Props) => {
  const navigate = useNavigate()
  const {reciboActive, startAgregarRecibo, reiniciarReciboState} = useReciboStore();
  const {reiniciarClienteState} = useClienteStore();
  const {reiniciarCompensadaState} = useCompensadaStore();


  const { startAgregarTarjeta } = useTarjetaStore();
  const {tipos, startTraerTiposTarjetas} = useTiposTarjetaStore();

  const {codigoCliente, importe, tipoComprobante, tipoTarjeta, cuotas, recargo, creadoPor, onInputChange, formState} = useForm(reciboActive || initialState);
  const [enviado, setEnviado] = useState<boolean>(false);

  useEffect(() => {
    startTraerTiposTarjetas();
  }, []);

  useEffect(() => {
    console.log(tipos);
  }, [tipos])

  const volverAtras = () => {
    setTarjetaModal(false);
    setModalReciboPago(true);
  };

  const hacerRecibo = async() => {
    setEnviado(true);

    if(importe === '' || tipoTarjeta === '' || !tipoTarjeta) return;


    const reciboOk = reciboActive && await startAgregarRecibo(reciboActive, 'TARJETA');
    if(!reciboOk) return; 
    
    const tarjetaOK = await startAgregarTarjeta(formState as Tarjeta);

    if(!tarjetaOK) return;

    reiniciarReciboState();
    reiniciarClienteState();
    reiniciarCompensadaState();
    navigate('/');
    
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/80'>
        <div className='bg-white p-6 rouneded shadow-md text-center w-xl'>
            <div className="flex flex-col">
              <div className="justify-between flex items-center px-4 pt-4 rounded-md">
                <div className="flex items-center gap-2">
                  <IoDocumentTextOutline className="text-yellow-500"/>
                  <h3 className="text-xl font-medium">Detalles de la tarjeta</h3>
                </div>
                <IoCloseOutline size={20} onClick={volverAtras} className="hover:border hover:border-gray-500 cursor-pointer rounded-sm"/>
              </div>
              <p className="text-gray-600 text-start">Complete los datos especificos de la tarjeta</p>
            </div>

            <form className="grid grid-cols-2 gap-5 mt-5">
              <div className="flex flex-col col-span-2">
                  <label htmlFor="codigoCliente" className="text-start font-medium">Cliente</label>
                  <input value={codigoCliente.nombre} onChange={onInputChange} type="text" name="codigoCliente" id="codigoCliente" className="border border-gray-300 rounded-sm p-2"/>
              </div>

              <div className="flex flex-col">
                  <label htmlFor="tipoTarjeta" className="text-start font-medium">Tipo Tarjeta *</label>
                  <select name="tipoTarjeta" id="tipoTarjeta" onChange={onInputChange} value={tipoTarjeta} className="border border-gray-300 rouneded-sm p-2">
                    <option value="">---Seleccionar Una Opcion---</option>
                    {tipos.map(tipo => (
                      <option value={tipo._id} key={tipo._id}>{tipo.nombre}</option>
                    ))}
                  </select>
                  { ( !tipoTarjeta && enviado) && <p className="text-red-600 text-xs">El tipo de Tarjeta es Obligatorio</p>}
              </div>

              <div className="flex flex-col">
                  <label htmlFor="importe" className="text-start font-medium">Importe *</label>
                  <input value={importe} onChange={onInputChange} type="number" name="importe" id="importe" className="border text-end border-gray-300 rounded-sm p-2"/>
                  { ( !importe && enviado) && <p className="text-red-600 text-xs">El importe es Obligatorio</p>}
              </div>

              <div className="flex flex-col">
                  <label htmlFor="tipoComprobante" className="text-start font-medium">Tipo Comprobante</label>
                  <input value={tipoComprobante} onChange={onInputChange} type="text" name="tipoComprobante" id="tipoComprobante" className="border border-gray-300 rounded-sm p-2"/>
              </div>

              <div className="flex flex-col">
                  <label htmlFor="cuotas" className="text-start font-medium">Cuotas</label>
                  <input value={cuotas} onChange={onInputChange} type="text" name="cuotas" id="cuotas" className="border border-gray-300 rounded-sm p-2"/>
              </div>

              <div className="flex flex-col">
                  <label htmlFor="recargo" className="text-start font-medium">Recargo</label>
                  <input value={recargo} onChange={onInputChange} type="text" name="recargo" id="recargo" className="border border-gray-300 rounded-sm p-2"/>
              </div>
            </form>

            <div className="flex mt-5 gap-5 w-sm ml-auto">
              <Button text="Volver" click={volverAtras} className="h-10 border-gray-500" type="secondary"/>
                <Button text="Aceptar" click={hacerRecibo}/>
            </div>
        </div>
    </div>
  )
}
