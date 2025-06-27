
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderUsuario } from '../components/usuario/HeaderUsuario'
import { UsuarioList } from '../components/usuario/UsuarioList'
import { useUsuarioStore } from '../hooks'
import { HandleUsuario }  from '../components/usuario/HandleUsuario'
import { Usuario as user } from '../types/usuario'

export const Usuario = () => {
    const { usuarios, startTraerUsuarios } = useUsuarioStore();
    const [buscador, setBuscador] = useState<string>('')
    const [addUsuario, setAddUsuario] = useState<boolean>(false);
    const [usuarioFilter, setUsuarioFilter] = useState<user[]>(usuarios);

    //Todo De Estadistica

    useEffect(() => {
        startTraerUsuarios();
    }, []);


    useEffect(() => {
      setUsuarioFilter(usuarios.filter(elem => elem.nombre.toUpperCase().startsWith(buscador.toUpperCase())))
    }, [buscador, usuarios]);

  return (
    <section className='bg-yellow-50'>
        <Navbar text='Vendedores'/>

        <HeaderUsuario buscador={buscador} setBuscador={setBuscador} setAddUsuario={setAddUsuario}/>
        <UsuarioList usuarios={usuarioFilter} setAddUsuario={setAddUsuario}/>

        {
          addUsuario && <HandleUsuario setAddUsuario={setAddUsuario}/>
        }
    </section>
  )
}
