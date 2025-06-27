import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { HeaderNumeros } from '../components/numeros/HeaderNumeros'
import { NumeroList } from '../components/numeros/NumeroList'
import { useNumeroStore } from '../hooks'
import { Numero as num } from '../types/numero'

export const Numero = () => {

    const { numeros, startTraerNumeros} = useNumeroStore();
    const [ numerosFiltrados, setNumerosFiltrados ] = useState<Array<num>>(numeros);
    const [buscador, setBuscador] = useState<string>('');
  
    useEffect(() => {
        startTraerNumeros();
    }, []);

    useEffect(() => {
      setNumerosFiltrados(numeros.filter(elem => elem.tipo?.startsWith(buscador.toUpperCase())))
    }, [buscador, numeros]) 

  return (
    <main>
      <Navbar text='Gestion de Numeros' />

      <div className='bg-yellow-50'>
        <HeaderNumeros buscador={buscador} setBuscador={setBuscador}/>
        <NumeroList numeros={numerosFiltrados}/>
      </div>
    </main>
  )
}
