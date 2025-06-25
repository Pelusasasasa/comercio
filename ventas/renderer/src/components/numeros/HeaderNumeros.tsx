import { useEffect, useState } from "react"
import { Buscador } from "../Buscador"

interface Props {
  buscador: string;
  setBuscador: React.Dispatch<React.SetStateAction<string>>;
}

export const HeaderNumeros = ({ buscador, setBuscador }: Props) => {

  return (
    <div className="flex justify-between p-5">
        <h3 className="font-medium text-2xl">Listado de Numeros</h3>

        <Buscador buttonText="+ Agregar Numero" buscador={buscador} setBuscador={setBuscador} hiddenButton={true} placeHolder="Buscar por Tipo..."/>
    </div>
  )
}
