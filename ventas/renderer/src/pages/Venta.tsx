import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderCliente } from '../components/venta/HeaderCliente'
import { SearchProduct } from '../components/venta/SearchProduct'
import { TablaProductos } from '../components/venta/TablaProductos'
import { BotonesVenta } from '../components/venta/BotonesVenta'
import { ModalModificarProducto } from '../components/venta/ModalModificarProducto'

export const Venta = () => {

  const [ modalModificarProducto, setModalModificarProducto] = useState<Boolean>(false);
  const [blanco, setBlanco] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'F9'){
        e.preventDefault();
        
        setBlanco(prev => !prev);
      };
    };

    document.addEventListener('keydown', handleKeyDown);
    
    window.electronAPI.imprimirComprobante({});
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }

    
  }, []) ;

  return (
    <section className={`${blanco ? 'bg-[#dbbf8b]' : 'bg-black'} h-screen`}>
        <Navbar text='Venta'/>

        <HeaderCliente/>
        <SearchProduct/>
        <TablaProductos setModalModificarProducto={setModalModificarProducto}/>
        <BotonesVenta/>

        {modalModificarProducto && <ModalModificarProducto setModalModificarProducto={setModalModificarProducto}/>}
    </section>
  )
}
