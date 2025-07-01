import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar';
import { HeaderCategoria } from '../components/categoria/HeaderCategoria';
import { HandleCategoria } from '../components/categoria/HandleCategoria';
import { useCategoriaStore } from '../hooks/useCategoriaStore';
import { CategoriaList } from '../components/categoria/CategoriaList';
import { Categoria as cat } from '../types/categoria';

export const Categoria = () => {
    const { categorias } = useCategoriaStore();
    //TODO ESTADISTICA

    const [buscador, setBuscador ] = useState<string>('');
    const [handleCategoria, setHandleCategoria] = useState<boolean>(false);
    const [categoriaFilter, setCategoriaFilter] = useState<cat[]>([]);

    useEffect(() => {
      setCategoriaFilter(categorias.filter(elem => (
        elem.nombre.startsWith(buscador.toUpperCase()) ||
        elem.descripcion.startsWith(buscador.toUpperCase())
      )));
    }, [buscador, categorias])

  return (
    <section className='bg-yellow-50'>
        <Navbar text='Gestion de Categorias'/>
        <HeaderCategoria buscador={buscador} setBuscador={setBuscador} setHandleCategoria={setHandleCategoria}/>
    
        <CategoriaList categorias={categoriaFilter} setHandleCategoria={setHandleCategoria}/>
    
        {handleCategoria && <HandleCategoria setHandleCategoria={setHandleCategoria}/>}
    </section>
  )
};
