import { useEffect, useState } from "react"
import { Buscador } from "../Buscador"

export const HeaderNumeros = () => {

    const [buttonActive, setButtonActive ] = useState<string>('listado');
    const [buscador, setBuscador] = useState<string>('');
    const [modalNumero, setModalNumero] = useState<boolean>(false);
    
    useEffect(() => {
      console.log("a")
      //Todo de abrir modal de agregar numero
    }, [modalNumero])
    

  return (
    <div className="flex justify-between p-5">
        <div className="bg-gray-200 p-2  rounded-sm ">
            <button onClick={() => setButtonActive('listado')} className={`${buttonActive === 'listado' ? 'bg-white' : ''} border-gray-200 border rounded-sm px-2 py-1 cursor-pointer`}>Listado Numeros</button>
            <button onClick={() => setButtonActive('estadistica')} className={`${buttonActive === 'estadistica' ? 'bg-white' : ''} border-gray-200 border rounded-sm px-2 py-1 cursor-pointer`}>Estadisticas</button>
        </div>

        <Buscador buttonText="+ Agregar Numero" buscador={buscador} setBuscador={setBuscador} placeHolder="Buscar por tipo, Prefijo o formato" modal={setModalNumero} />
    </div>
  )
}
