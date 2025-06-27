import { GoPerson } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { useForm, useMarcaStore, useUsuarioStore } from "../../hooks";
import { Button } from "../Button";
import { Usuario } from "../../types/usuario";
import { useState } from "react";
import { Marca } from "../../types/marca";

interface Props {
    setHandleMarca: (arg: boolean) => void;
};


const initialFormState: Marca = {
    nombre: '',
    descripcion: '',
    activo: true,
}



export const HandleMarca = ({setHandleMarca}: Props) => {
    const { marcaActive, startAgregarMarca, startModificarMarca } = useMarcaStore();
    
    const { nombre, descripcion, formState, onResetForm, onInputChange, onCheckboxChange} = useForm(marcaActive ?? initialFormState);
    const [error, setError] = useState(nombre);

    const agregarMarca = () => {

        if(nombre === '') {
            setError('El Nombre es obligatorio');
            return;
        };

        startAgregarMarca(formState);
        setHandleMarca(false);
    };

    const modificarMarca = () => {
        startModificarMarca(formState);
        setHandleMarca(false);
    }
    
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="bg-white p-6 rounded shadow-md text-center w-xl">
        <div className="flex justify-between">
            <div>
                <div className="flex gap-5 items-center">
                    <GoPerson className="text-yellow-600" size={20}/>
                    <h3 className="font-medium text-xl">Crear Nueva Marca</h3>
                </div>
                <p className="text-gray-600">Complete los datos de la nueva Marca</p>
            </div>
            <IoCloseOutline onClick={() => setHandleMarca(false)} size={20} className="hover:border hover:border-gray-500 hover:rounded-lg cursor-pointer hover:text-black text-gray-500"/>
        </div>

        <form  className="flex flex-col gap-5 mt-2">
            <div className="flex space-y-2 flex-col">
                <label htmlFor="codigo" className="text-sm font-medium leading-none ">Nombre *</label>
                <input value={nombre} type="text" name="nombre" id="nombre" placeholder="EJ: PHILIPS" onChange={onInputChange} className="border border-gray-400 rounded-sm p-2 "/>
                <p className="text-xs text-red-700 m-0 text-start">{error.nombre ?? error.nombre}</p>
            </div>
            <div className="flex space-y-2 flex-col">
                <label htmlFor="descripcion" className="text-sm font-medium leading-none ">Descripcion </label>
                <textarea value={descripcion} rows={5} name="descripcion" id="descripcion" placeholder="EJ: PRODUCTOS DE ILUMINACION LED Y TRADICIONAL" onChange={onInputChange}  className="border border-gray-400 rounded-sm p-2 ">
                </textarea>
            </div>

            
        </form>
        <div className="flex gap-4 mt-5 justify-end ml-auto w-xs">
                <Button type="secondary" text="Cancelar" click={() => setHandleMarca(false)}/>
                {marcaActive 
                ? (<Button text="Modificar Marca" click={modificarMarca}/>) 
                : (<Button text="Crear Marca" click={agregarMarca}/>)
            }
        </div>
      </div>
    </div>
  );
}
