import { useState } from 'react';
import { HeaderRecibo } from '../components/recibo/HeaderRecibo'
import ReciboList from '../components/recibo/ReciboList'

import { CgCalculator } from "react-icons/cg";
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { ModalReciboPago } from '../components/recibo/ModalReciboPago';
import { useReciboStore } from '../hooks/useReciboStore';
import { useClienteStore } from '../hooks/useClienteStore';
import { ChequeModal } from '../components/ChequeModal';

export const Recibo = () => {
  const navigate = useNavigate();

  const { totalPagado, activeRecibo, reciboActive } = useReciboStore();
  const { clienteActive} = useClienteStore();

  const [modalReciboPago, setModalReciboPago] = useState<boolean>(false);
  const [chequeModal, setChequeModal] = useState<boolean>(false);
  
  const aplicarRecibo = () => {
    const dia = new Date().getDate().toString().padStart(2, '0');
    const mes = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const year = new Date().getFullYear();
    activeRecibo({
      fecha: `${year}-${mes}-${dia}`,
      cliente: clienteActive,
      importe: totalPagado,
      medioPago: 'EFECTIVO',
      observaciones: '',
      items: reciboActive?.items
    });
    setModalReciboPago(true);
  }

  return (
    <div>
        <Navbar text='Recibo'/>
        <div className='bg-yellow-50 pb-7'>
          <HeaderRecibo />
          <ReciboList/>
          <div className='flex justify-between items-center bg-yellow-50 m-2 p-2 rounded-md'>
            <div className='flex gap-2 items-center'>
              <CgCalculator size={40} className='text-yellow-500'/>
              <p className='font-medium whitespace-nowrap'>Pago Rapido: </p>
              <input type="number" name="pagoRapido"  value={'0.00'} id="pagoRapido" className='border bg-white border-gray-200 rounded-sm p-2' placeholder='Ingrese Importe'/>
            </div>

            <div className='flex gap-2 items-center'>
              <p className='whitespace-nowrap'>Total A Pagar: <span className='text-green-500'>$ {totalPagado.toFixed(2)}</span></p>
              <Button text='Cancelar Recibo' type='secondary' click={() => navigate(-1)} />
              <Button text='Aplicar Recibo' click={aplicarRecibo} />
            </div>
          </div>
        </div>
        { modalReciboPago && <ModalReciboPago setChequeModal={setChequeModal} setModalReciboPago={setModalReciboPago}/>}
        {chequeModal && <ChequeModal/>}
    </div>
  )
}
