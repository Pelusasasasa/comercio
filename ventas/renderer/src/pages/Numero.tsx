import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderNumeros } from '../components/numeros/HeaderNumeros'
import { NumeroList } from '../components/numeros/NumeroList'

const Numero = () => {
  return (
    <main>
      <Navbar text='Gestion de Numeros' />

      <div className='bg-yellow-50'>
        <HeaderNumeros/>
        <NumeroList/>
      </div>
    </main>
  )
}

export default Numero