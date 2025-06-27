import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderMarca } from '../components/marca/HeaderMarca'
import { MarcaList } from '../components/marca/MarcaList';
import { useMarcaStore } from '../hooks/useMarcaStore';

export const Marca = () => {

  const {marcas } = useMarcaStore()

    const [buscador, setBuscador] = useState<string>('');
    const [addMarca, setAddMarca] = useState<boolean>(false);

  return (
    <section className='bg-yellow-50'>
        <Navbar text='Marcas'/>
        <HeaderMarca buscador={buscador} setBuscador={setBuscador} setAddMarca={setAddMarca}/>

        <MarcaList marcas={marcas}/>
    </section>
  )
}
