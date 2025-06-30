import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderRemito } from '../components/remito/HeaderRemito'
import { RemitoList } from '../components/remito/RemitoList'
import { useRemitoStore } from '../hooks'

export const Remito = () => {
  const { remitos, startTraerRemitosAtivos } = useRemitoStore()
  const [buscador, setBuscador] = useState<string>('');

  useEffect(() => {
    startTraerRemitosAtivos();
  }, [])

  return (
    <section>
      <Navbar text='Gestion de Remitos'/>

      <HeaderRemito buscador={buscador} setBuscador={setBuscador}/>

      <RemitoList remitos={remitos}/>
    </section>
  )
}
