
import { useState } from 'react'
import CompensadaList from '../components/consultar/CompensadaList'
import { HeaderConsultar } from '../components/consultar/HeaderConsultar'
import { MovList } from '../components/consultar/MovList'
import { Navbar } from '../components/Navbar'
import { HistoricaList } from '../components/consultar/HistoricaList'

const Consultar = () => {

  const [ tipoCuenta, setTipoCuenta ] = useState('compensada');

  return (
    <div>
        <Navbar text='Consultar Cuenta' />

        <div className='bg-yellow-50'>
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

export default Consultar