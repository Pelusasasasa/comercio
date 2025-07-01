import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderCliente } from '../components/venta/HeaderCliente'

export const Venta = () => {
  return (
    <section>
        <Navbar text='Venta'/>

        <HeaderCliente/>
    </section>
  )
}
