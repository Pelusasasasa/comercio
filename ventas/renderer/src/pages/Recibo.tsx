import { useState } from 'react';

import { CgCalculator } from "react-icons/cg";

import { useNavigate } from 'react-router-dom';

import { useClienteStore } from '../hooks/useClienteStore';
import { useMovimientoStore } from '../hooks/useMovimientoStore';
import { useReciboStore } from '../hooks/useReciboStore';
import { useUsuarioStore } from '../hooks/useUsuarioStore';

import { Button } from '../components/Button';
import { ChequeModal } from '../components/ChequeModal';
import { HeaderRecibo } from '../components/recibo/HeaderRecibo'
import { ModalReciboPago } from '../components/recibo/ModalReciboPago';
import { Navbar } from '../components/Navbar'
import ReciboList from '../components/recibo/ReciboList'
import { useCompensadaStore } from '../hooks/useCompensadaStore';

export const Recibo = () => {
  const navigate = useNavigate();

  const { usuarioActive } = useUsuarioStore();
  const { reiniciarCompensadaState } = useCompensadaStore();
  const { totalPagado, activeRecibo, reciboActive, reiniciarReciboState  } = useReciboStore();
  const { clienteActive, reiniciarClienteState } = useClienteStore();

  const [modalReciboPago, setModalReciboPago] = useState<boolean>(false);
  const [chequeModal, setChequeModal] = useState<boolean>(false);
  
  const aplicarRecibo = () => {
    activeRecibo({
      codigoCliente: clienteActive,
      importe: totalPagado,
      medioPago: 'EFECTIVO',
      observaciones: '',
      items: reciboActive?.items,
      creadoPor: usuarioActive?._id,
    });
    setModalReciboPago(true);
  };

  const cancelarRecibo = () => {
    reiniciarReciboState();
    reiniciarClienteState();
    reiniciarCompensadaState();
    navigate(-1)
  }

  return (
    <div className='bg-chocolate h-screen flex flex-col'>
        <Navbar text='Recibo'/>
        <HeaderRecibo />
        <ReciboList/>

          <div className='flex justify-between items-center bg-yellow-50 m-2 p-2 rounded-md mt-auto'>
            <div className='flex gap-2 items-center'>
              <CgCalculator size={40} className='text-yellow-500'/>
              <p className='font-medium whitespace-nowrap'>Pago Rapido: </p>
              <input type="number" name="pagoRapido"  id="pagoRapido" className='border bg-white border-gray-200 rounded-sm p-2' placeholder='Ingrese Importe'/>
            </div>

            <div className='flex gap-2 items-center'>
              <p className='whitespace-nowrap'>Total A Pagar: <span className='text-green-500'>$ {totalPagado.toFixed(2)}</span></p>
              <Button text='Cancelar Recibo' type='secondary' click={cancelarRecibo}/>
              <Button text='Aplicar Recibo' click={aplicarRecibo} className='h-12'/>
            </div>
          </div>
        { modalReciboPago && <ModalReciboPago setChequeModal={setChequeModal} setModalReciboPago={setModalReciboPago}/>}
        {chequeModal && <ChequeModal/>}
    </div>
  )
}
