import { useEffect, useState } from 'react';

import { useClienteStore } from '../hooks/useClienteStore';

import { GoArrowLeft, GoDownload, GoSearch  } from "react-icons/go";
import { LuFilter } from "react-icons/lu";

import { Listaclientes } from '../components/Listaclientes';
import HandleCliente from '../components/handleCliente';
import { exportarClientes } from '../helpers/exportarExcel';
import { Navbar } from '../components/Navbar';


export const Clientes = () => {

  const { clientes, traerClientes, isSavingCliente } = useClienteStore();

  const [buttonActive, setButtonActive] = useState('listado');
  const [listFilter, setListFilter] = useState(false);

  const [filtro,  setFiltro] = useState('');
  const [buscador, setBuscador] = useState('');
  const [ listado, setListado ] = useState(clientes);



  useEffect(() => {
    traerClientes()
  }, []);


  useEffect(() => {
    const nuevaLista = clientes.filter(elem => {
      const nombre = elem.nombre.toUpperCase();
      const codigo = elem.codigo;
      const dni = elem.dni.toUpperCase();
      
      return nombre.includes(buscador.toUpperCase()) || codigo == buscador || dni.includes(buscador.toUpperCase());
    });

    setListado(nuevaLista)
  }, [buscador || clientes])

  useEffect(() => {

    if(filtro === '') return setListado(clientes)
    if(filtro === 'saldo') return setListado(clientes.filter(elem => elem.saldo !== 0))
    if(filtro === 'sinSaldo') return setListado(clientes.filter(elem => elem.saldo === 0))
    if(filtro === 'INSCRIPTO') return setListado(clientes.filter(elem => elem.condicionIva === 'INSCRIPTO'))
    if(filtro === 'MONOTRIBUTO') return setListado(clientes.filter(elem => elem.condicionIva === 'MONOTRIBUTO'))
    if(filtro === 'CONSUMIDOR FINAL') return setListado(clientes.filter(elem => elem.condicionIva === 'CONSUMIDOR FINAL'))
    if(filtro === 'EXENTO') return setListado(clientes.filter(elem => elem.condicionIva === 'EXENTO'))
  }, [filtro])

  const exportar = () => {
    exportarClientes(clientes)
  }

  return (
    <>
      <Navbar exportar={exportar} text='clientes'/>

      <main className='bg-chocolate h-[calc(100vh-64px)]'>
        <div className='flex justify-between mx-5'>
          <div className='bg-gray-100 flex gap-2 rounded-sm px-2 py-1 my-3'>
            <button onClick={() => setButtonActive('listado')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'listado' ? 'bg-white' : 'text-gray-400'}`}>Listado de Clientes</button>
            <button onClick={() => setButtonActive('agregar')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'agregar' ? 'bg-white' : 'text-gray-400'}`}>Nuevo Cliente</button>
          </div>

          <div className='flex items-center gap-5'>
            <div className='flex border-gray-300 bg-white items-center rounded-sm border gap-2 items-cente p-2'>
              <GoSearch color='gray'/>
              <input type="text" placeholder='Buscar Por Nombre, codigo o CUIT' className='p-1 w-[500px]' onChange={(e) => setBuscador(e.target.value)} />
            </div>

            <button 
            onClick={() => setListFilter(!listFilter)}
            className='hidden lg:flex gap-2 border-gray-300 border rounded-sm items-center hover:bg-gray-100 hover:cursor-pointer p-2  bg-white'>
              <LuFilter/>

              <p className="">Filtrar</p>
            </button>
            {
              listFilter && (
                <div className=' px-2 border border-gray-200 rounded-sm absolute right-0 top-32'>
                  <h3 className='py-1 font-medium'>Filtar Por</h3>
                  <hr />
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro(''), setListFilter(false)}}>Todos Los Clientes</p>
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro('saldo'), setListFilter(false)}}>Con Saldo Pendiente</p>
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro('sinSaldo'), setListFilter(false)}}>Sin Saldo</p>
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro('INSCRIPTO'), setListFilter(false)}}>Inscriptos</p>
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro('MONOTRIBUTO'), setListFilter(false)}}>Monotributos</p>
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro('CONSUMIDOR FINAL'), setListFilter(false)}}>Consumidor Final</p>
                  <p className='py-1 hover:bg-gray-100 cursor-pointer rounded-sm px-1' onClick={() => {setFiltro('EXENTO'), setListFilter(false)}}>Exento</p>
                </div>
              )
            }
          </div>
        </div>

        <div>
          {buttonActive === 'listado' ? <Listaclientes clientes={listado} setButtonActive={setButtonActive} /> : <HandleCliente setButtonActive={setButtonActive}/>}
        </div>
      </main>
    </>
  )
};