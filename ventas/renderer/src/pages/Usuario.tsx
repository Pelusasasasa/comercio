
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderUsuario } from '../components/usuario/HeaderUsuario'
import { UsuarioList } from '../components/usuario/UsuarioList'
import { useUsuarioStore } from '../hooks'
import { AddUsuarioModal } from '../components/usuario/AddUsuarioModal'

export const Usuario = () => {
    const { usuarios, startTraerUsuarios } = useUsuarioStore();
    const [buscador, setBuscador] = useState<string>('')
    const [addUsuario, setAddUsuario] = useState<boolean>(false);

    useEffect(() => {
        startTraerUsuarios();
    }, [])

  return (
    <section>
        <Navbar text='Vendedores'/>

        <HeaderUsuario buscador={buscador} setBuscador={setBuscador} setAddUsuario={setAddUsuario}/>
        <UsuarioList usuarios={usuarios}/>

        {
          addUsuario && <AddUsuarioModal setAddUsuario={setAddUsuario}/>
        }
    </section>
  )
}
