import { useState } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { TiFolderOpen } from "react-icons/ti";

import { Categoria } from "../../types/categoria";
import { useForm } from "../../hooks";
import { useCategoriaStore } from "../../hooks/useCategoriaStore";

import { Button } from "../Button";

interface Props {
  setHandleCategoria: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialFormState: Categoria = {
  nombre: '',
  descripcion: '',
  activo: true
}

export const HandleCategoria = ({setHandleCategoria}: Props) => {
  const { categoriaActive, startAgregarCategoria, startModificarCategoria } = useCategoriaStore();
  const {nombre, descripcion, onInputChange, formState} = useForm(categoriaActive ?? initialFormState);

  const [error, setError] = useState<string>('')

  const agregarCategoria = () => {
    if(nombre === ''){
      setError('El nombre es Obligatorio');
      return;
    };
    console.log(formState)
    startAgregarCategoria(formState);
    setHandleCategoria(false);
  };
  
  const modificarCategoria = () => {
    if(nombre === ''){
        setError('El nombre es Obligatorio');
        return;
    };

    if(nombre.length < 3){
        setError('El nombre debe ser mayor a 3 caracteres ');
        return;
    };

    startModificarCategoria(formState);
    setHandleCategoria(false);
  };

  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-6 rounded shadow-md text-center w-xl">
            <div className="flex justify-between">
                <div>
                    <div className="flex gap-5 items-center">
                        <TiFolderOpen className="text-yellow-600" size={20}/>
                        <h3 className="font-medium text-xl">Crear Nueva Categoria</h3>
                    </div>
                    <p className="text-gray-600">Complete los datos de la nueva Categoria</p>
                </div>
                <IoCloseOutline onClick={() => setHandleCategoria(false)} size={20} className="hover:border hover:border-gray-500 hover:rounded-lg cursor-pointer hover:text-black text-gray-500"/>
            </div>
    
            <form  className="flex flex-col gap-5 mt-2">
                <div className="flex space-y-2 flex-col">
                    <label htmlFor="codigo" className="text-sm text-start font-medium leading-none ">Nombre *</label>
                    <input value={nombre} type="text" name="nombre" id="nombre" placeholder="EJ: ALARMAS" onChange={onInputChange} className="border border-gray-400 rounded-sm p-2 "/>
                    <p className="text-xs text-red-700 m-0 text-start">{error ?? error}</p>
                </div>
                <div className="flex space-y-2 flex-col">
                    <label htmlFor="descripcion" className="text-sm text-start font-medium leading-none ">Descripcion </label>
                    <textarea value={descripcion} rows={5} name="descripcion" id="descripcion" placeholder="EJ: ALARMAS, CENTRALES, SENSORES" onChange={onInputChange}  className="border border-gray-400 rounded-sm p-2 ">
                    </textarea>
                </div>
    
                
            </form>
            <div className="flex gap-4 mt-5 justify-end ml-auto w-xs">
                    <Button type="secondary" text="Cancelar" click={() => setHandleCategoria(false)}/>
                    { categoriaActive
                    ? (<Button text="Modificar Categoria" click={modificarCategoria}/>) 
                    : (<Button text="Crear Categoria" click={agregarCategoria}/>)
                }
            </div>
          </div>
        </div>
  )
}
