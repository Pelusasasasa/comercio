import { useEffect, useState } from 'react';
import { Buscador } from '../Buscador'
import { useRemitoStore } from '../../hooks';

interface Props {
    buscador: string;
    setBuscador: React.Dispatch<React.SetStateAction<string>>;
}

export const HeaderRemito = ({buscador, setBuscador}: Props) => {

    const {startTraerRemitosNoActivos, startTraerRemitosAtivos} = useRemitoStore();
    const [buttonActive, setButtonActive] = useState<string>('Sin Pasar');

    useEffect(() => {
        if(buttonActive === 'Pasado'){
            startTraerRemitosNoActivos();
        }else{
            startTraerRemitosAtivos()
        }
    }, [buttonActive])

    const pasarACuentaCorriente = () => {
        console.log("a")
    }

  return (
    <div className='flex justify-between p-5'>
        <div className='bg-gray-100 flex gap-2 rounded-sm px-2 py-1 my-3'>
            <button onClick={() => setButtonActive('Sin Pasar')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'Sin Pasar' ? 'bg-white' : 'text-gray-400'}`}>Sin Pasar</button>
            <button onClick={() => setButtonActive('Pasado')} className={`rounded-sm font-medium cursor-pointer p-2 ${buttonActive === 'Pasado' ? 'bg-white' : 'text-gray-400'}`}>Pasado</button>
        </div>

        <Buscador 
            placeHolder='Buscar por cliente, codigo o numero'
            buttonText='Pasar a Cta. Cte.'
            buscador={buscador}
            setBuscador={setBuscador}
            hiddenButton={buttonActive === 'Pasado' ? true : false}
            modal={pasarACuentaCorriente}
            />
    </div>
  )
}
