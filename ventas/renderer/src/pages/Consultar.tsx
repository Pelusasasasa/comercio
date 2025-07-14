
import { useState } from 'react'
import CompensadaList from '../components/consultar/CompensadaList'
import { HeaderConsultar } from '../components/consultar/HeaderConsultar'
import { MovList } from '../components/movimiento/MovList'
import { Navbar } from '../components/Navbar'
import { HistoricaList } from '../components/consultar/HistoricaList'

export const Consultar = () => {

  const [ tipoCuenta, setTipoCuenta ] = useState('compensada');

  return (
    <div className='bg-chocolate'>
        <Navbar text='Consultar Cuenta' />

        <div className='pb-7'>
          <HeaderConsultar setTipoCuenta={setTipoCuenta}/>
          {tipoCuenta === 'compensada' 
            ? (<CompensadaList setTipoCuenta={setTipoCuenta} />)
            : (<HistoricaList setTipoCuenta={setTipoCuenta} />)
          }
          <MovList/>
        </div>
    </div>
  )
}