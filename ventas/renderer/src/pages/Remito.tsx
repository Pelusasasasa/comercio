import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderRemito } from '../components/remito/HeaderRemito'
import { RemitoList } from '../components/remito/RemitoList'

export const Remito = () => {
  
  const [buscador, setBuscador] = useState<string>('');

  return (
    <section>
      <Navbar text='Gestion de Remitos'/>

      <HeaderRemito buscador={buscador} setBuscador={setBuscador}/>

      <RemitoList />
    </section>
  )
}
