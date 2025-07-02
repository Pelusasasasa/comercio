import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderCliente } from '../components/venta/HeaderCliente'
import { SearchProduct } from '../components/venta/SearchProduct'
import { TablaProductos } from '../components/venta/TablaProductos'
import { BotonesVenta } from '../components/venta/BotonesVenta'
import { ModalModificarProducto } from '../components/venta/ModalModificarProducto'

export const Venta = () => {

  const [ modalModificarProducto, setModalModificarProducto] = useState<Boolean>(false);

  return (
    <section className='bg-[#dbbf8b] h-screen'>
        <Navbar text='Venta'/>

        <HeaderCliente/>
        <SearchProduct/>
        <TablaProductos setModalModificarProducto={setModalModificarProducto}/>
        <BotonesVenta/>

        {modalModificarProducto && <ModalModificarProducto setModalModificarProducto={setModalModificarProducto}/>}
    </section>
  )
}
