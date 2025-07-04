import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderRemito } from '../components/remito/HeaderRemito'
import { RemitoList } from '../components/remito/RemitoList'
import { useRemitoStore } from '../hooks'
import { Remito as remito } from '../types/remito'
import { MovList } from '../components/movimiento/MovList'

export const Remito = () => {
  const { remitos, startTraerRemitosAtivos } = useRemitoStore();
  const [buscador, setBuscador] = useState<string>('');
  const [remitosFiltrados, setRemitosFiltrados] = useState<remito[]>([]);

  useEffect(() => {
    setRemitosFiltrados(remitos.filter(remito => (
      remito?.codigoCliente?.codigo?.toString().startsWith(buscador.toUpperCase()) 
      || remito?.datosCliente?.nombre.startsWith(buscador.toUpperCase()) 
      || remito.numeroComprobante.includes(buscador.toUpperCase())
    )));
  }, [buscador, remitos]);

  useEffect(() => {
    startTraerRemitosAtivos();
  }, [])

  return (
    <section>
      <Navbar text='Gestion de Remitos'/>

      <HeaderRemito buscador={buscador} setBuscador={setBuscador}/>

      <RemitoList remitos={remitosFiltrados}/>
      <MovList/>
    </section>
  )
}
