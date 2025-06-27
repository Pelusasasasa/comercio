import React, { useState } from 'react'
import { Buscador } from '../Buscador'

interface Props {
  buscador: string,
  setBuscador: React.Dispatch<React.SetStateAction<string>>
  setAddMarca: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderMarca = ({buscador, setBuscador, setAddMarca}: Props) => {

  const [buttonActive, setButtonActive] = useState('listado');

  return (
    <div className='flex justify-between p-5'>
        <div className='bg-gray-100 flex gap-2 rounded-sm px-2 py-1 my-3'>
            <button onClick={() => setButtonActive('listado')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'listado' ? 'bg-white' : 'text-gray-400'}`}>Lista de Vendedores</button>
            <button onClick={() => setButtonActive('estadistica')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'estadistica' ? 'bg-white' : 'text-gray-400'}`}>Estadisticas</button>
        </div>
        <Buscador 
            placeHolder='Buscar Marca por Nombre'
            buttonText='Agergar Marca'
            setBuscador={setBuscador}
            buscador={buscador}
            modal={setAddMarca}
            hiddenButton={false}
        />
    </div>
  )
}
