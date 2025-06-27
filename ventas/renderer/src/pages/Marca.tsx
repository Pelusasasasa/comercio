import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderMarca } from '../components/marca/HeaderMarca'
import { MarcaList } from '../components/marca/MarcaList';
import { useMarcaStore } from '../hooks/useMarcaStore';
import { Marca as marca } from '../types/marca';
import { HandleMarca } from '../components/marca/HandleMarca';

export const Marca = () => {
  //TODO   Estadisticas
  const { marcas } = useMarcaStore()

    const [buscador, setBuscador] = useState<string>('');
    const [handleMarca, setHandleMarca] = useState<boolean>(false);
    const [marcasFiltradas, setMarcasFiltradas] = useState<marca[]>([]);

    useEffect(() => {
      setMarcasFiltradas(marcas.filter(elem => (
        elem.nombre.startsWith(buscador.toUpperCase()) || elem.descripcion.startsWith(buscador.toUpperCase())
      )));
    }, [marcas, buscador])

  return (
    <section className='bg-yellow-50'>
        <Navbar text='Gestion Marcas'/>
        <HeaderMarca buscador={buscador} setBuscador={setBuscador} setHandleMarca={setHandleMarca}/>

        <MarcaList marcas={marcasFiltradas} setHandleMarca={setHandleMarca}/>

        {handleMarca && <HandleMarca setHandleMarca={setHandleMarca}/>}
    </section>
  )
}
