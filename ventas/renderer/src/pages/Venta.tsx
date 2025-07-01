import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderCliente } from '../components/venta/HeaderCliente'
import { SearchProduct } from '../components/venta/SearchProduct'
import { TablaProductos } from '../components/venta/TablaProductos'
import { BotonesVenta } from '../components/venta/BotonesVenta'

export const Venta = () => {
  return (
    <section className='bg-[#dbbf8b] h-screen'>
        <Navbar text='Venta'/>

        <HeaderCliente/>
        <SearchProduct/>
        <TablaProductos/>
        <BotonesVenta/>
    </section>
  )
}
