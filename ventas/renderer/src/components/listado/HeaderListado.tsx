
import { GoSearch } from 'react-icons/go'
import { toISOStringUTCMinus3 } from '../../helpers/toISOStringUTCMinus3'
import { useEffect, useRef, useState } from 'react'
import { useListadoStore } from '../../hooks/useListadoStore';

interface Props {
    setBuscador: (arg: string) => void;
}

export const HeaderListado = ({setBuscador}: Props) => {
    const [ desde, setDesde] = useState<string>(toISOStringUTCMinus3(new Date()));
    const [ hasta, setHasta] = useState<string>(toISOStringUTCMinus3(new Date()));

    const hastaRef = useRef<HTMLInputElement>(null)

    const { startTraerListado, type  } = useListadoStore();

    useEffect(() => {
        type && startTraerListado(type, desde, hasta)
    }, [hasta]);

    const presionarTecla = (e) => {
        if(e.key === 'Enter'){
            hastaRef.current?.focus();
        }
    };

    const buscarComprobantes = (e) => {
        if(e.key === 'Enter'){
            startTraerListado(type, desde, hasta)
        }
    }

  return (
    <header className='flex justify-between mx-5 mt-3 gap-5'>
        <div className='flex gap-2 border col-span-2 w-[500px] border-gray-300 rounded-sm bg-white items-center mx-2'>
            <GoSearch size={20} className='text-gray-600'/>
            <input type="text" placeholder='Buscar Por cliente o numero...' className='w-full p-1' onChange={(e) => setBuscador(e.target.value)}/>
        </div>
        <div className='flex gap-5'>
            <div className='flex gap-2 items-center'>
                <label className='text-xl' htmlFor="desde">Desde: </label>
                <input type="date" name="desde" id="desde" className='border bg-white border-gray-400 rounded-sm p-1' value={desde} onKeyDown={presionarTecla} onChange={(e) => setDesde(e.target.value)}/>
            </div>
            <div className='flex gap-2 items-center'>
                <label className='text-xl' htmlFor="hasta">Hasta: </label>
                <input ref={hastaRef} type="date" name="hasta" id="hasta" className='border bg-white border-gray-400 rounded-sm p-1' value={hasta}  onKeyDown={buscarComprobantes} onChange={(e) => setHasta(e.target.value)}/>
            </div>
        </div>
    </header>
  )
}
