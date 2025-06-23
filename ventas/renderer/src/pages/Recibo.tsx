
import { HeaderRecibo } from '../components/recibo/HeaderRecibo'
import ReciboList from '../components/recibo/ReciboList'

import { CgCalculator } from "react-icons/cg";
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Recibo = () => {
  const navigate = useNavigate()
  const [pagoRapido, setPagoRapido] = useState<number>(0);

  return (
    <div>
        <Navbar text='Recibo'/>
        <div className='bg-yellow-50 pb-7'>
          <HeaderRecibo />
          <ReciboList pagoRapido={pagoRapido}/>
          <div className='flex justify-between items-center bg-yellow-50 m-2 p-2 rounded-md'>
            <div className='flex gap-2 items-center'>
              <CgCalculator size={40} className='text-yellow-500'/>
              <p className='font-medium whitespace-nowrap'>Pago Rapido: </p>
              <input type="number" name="pagoRapido" onChange={(e) => setPagoRapido(Number(e.target.value))} value={pagoRapido} id="pagoRapido" className='border bg-white border-gray-200 rounded-sm p-2' placeholder='Ingrese Importe'/>
            </div>

            <div className='flex gap-2 items-center'>
              <p className='whitespace-nowrap'>Total A Pagar: <span className='text-green-500'>{'$ 0.00'}</span></p>
              <Button text='Cancelar Recibo' type='secondary' click={() => navigate(-1)} />
              <Button text='Aplicar Recibo' click={() => {}} />
            </div>
          </div>
        </div>
    </div>
  )
}
