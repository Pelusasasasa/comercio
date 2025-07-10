import React from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderListado } from '../components/listado/HeaderListado'
import { ListadoList } from '../components/listado/ListadoList'
import { useListadoStore } from '../hooks/useListadoStore'

export const Listados = () => {

  return (
    <div className='bg-chocolate min-h-screen'>
        <Navbar text='Listado'/>

        <HeaderListado/>
        <ListadoList/>
    </div>
  )
}
