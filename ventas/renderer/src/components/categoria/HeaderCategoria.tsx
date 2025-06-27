import React, { useState } from 'react'
import { Buscador } from '../Buscador'

interface Props {
  buscador: string;
  setBuscador: React.Dispatch<React.SetStateAction<string>>;
  setHandleCategoria: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HeaderCategoria = ({buscador, setBuscador, setHandleCategoria}) => {

  const [buttonActive, setButtonActive] = useState<string>('listado');

  return (
    <div className='flex justify-between p-5'>
      <div className='bg-gray-100 flex gap-2 rounded-sm px-2 py-1 my-3'>
                  <button onClick={() => setButtonActive('listado')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'listado' ? 'bg-white' : 'text-gray-400'}`}>Lista de Categorias</button>
                  <button onClick={() => setButtonActive('estadistica')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'estadistica' ? 'bg-white' : 'text-gray-400'}`}>Estadisticas</button>
              </div>
              <Buscador 
                  placeHolder='Buscar Categoria por Nombre'
                  buttonText='Agergar Categoria'
                  setBuscador={setBuscador}
                  buscador={buscador}
                  modal={setHandleCategoria}
                  hiddenButton={false}
              />
    </div>
  )
}
