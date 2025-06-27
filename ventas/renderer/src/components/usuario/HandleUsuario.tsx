import { GoPerson } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { useForm, useUsuarioStore } from "../../hooks";
import { Button } from "../Button";
import { Usuario } from "../../types/usuario";
import { useState } from "react";

interface Props {
    setAddUsuario: (arg: boolean) => void;
}


const initialFormState: Usuario = {
    codigo: '',
    nombre: '',
    permiso: {
        cliente: false,
        producto: false,
        usuario: false,
        recibo: false,
        numero: false,
        consultar: false,
        servicioTecnico: false,
        remito: false,
        venta: false,
    },
    telefono: '',
    email: '',
}



export const HandleUsuario = ({setAddUsuario}: Props) => {
    const { usuarioActive, startAgregarUsuario, startModificarUsuario } = useUsuarioStore();
    
    const { codigo, nombre, telefono, email, permiso, formState, onResetForm, onInputChange, onCheckboxChange} = useForm(usuarioActive ?? initialFormState);
    const [errores, setErrores] = useState({
        codigo: '',
        nombre: ''
    });

    const agregarUsuario = () => {

        if(codigo === '') {
            setErrores({
                ...errores,
                codigo: 'El codigo es obligatorio'
            });
            return;
        };

        if(nombre === '') {
            setErrores({
                ...errores,
                nombre: 'El Nombre es obligatorio'
            });
            return;
        };

        startAgregarUsuario(formState);
        setAddUsuario(false);
    };

    const modificarUsuario = () => {
        startModificarUsuario(formState);
        setAddUsuario(false);
    }
    
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
      <div className="bg-white p-6 rounded shadow-md text-center w-xl">
        <div className="flex justify-between">
            <div>
                <div className="flex gap-5 items-center">
                    <GoPerson className="text-yellow-600" size={20}/>
                    <h3 className="font-medium text-xl">Crear Nuevo Vendedor</h3>
                </div>
                <p className="text-gray-600">Complete los datos del nuevo Vendedor</p>
            </div>
            <IoCloseOutline size={20} className="hover:border hover:border-gray-500 hover:rounded-lg cursor-pointer hover:text-black text-gray-500"/>
        </div>

        <form  className="grid grid-cols-2 gap-5 mt-2">
            <div className="flex space-y-2 flex-col">
                <label htmlFor="codigo" className="text-sm font-medium leading-none ">Codigo *</label>
                <input value={codigo} type="text" name="codigo" id="codigo" placeholder="021" onChange={onInputChange} className="border border-gray-400 rounded-sm p-2 "/>
                <p className="text-xs text-red-700 m-0 text-start">{errores.codigo ?? errores.codigo}</p>
            </div>
            <div className="flex space-y-2 flex-col">
                <label htmlFor="nombre" className="text-sm font-medium leading-none ">Nombre *</label>
                <input value={nombre} type="text" name="nombre" id="nombre" placeholder="Nombre" onChange={onInputChange}  className="border border-gray-400 rounded-sm p-2 "/>
                <p className="text-xs text-red-700 m-0 text-start">{errores.nombre ?? errores.nombre}</p>
            </div>

            <div className="flex space-y-2 flex-col">
                <label htmlFor="telefono" className="text-sm font-medium leading-none ">Telefono</label>
                <input value={telefono} type="tel" name="telefono" placeholder="3456445977" id="telefono" onChange={onInputChange}  className="border border-gray-400 rounded-sm p-2 "/>
            </div>

            <div className="flex space-y-2 flex-col col-span-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                <input value={email} type="email" name="email" id="email" placeholder="ejemplo@ejemplo.com" onChange={onInputChange}  className="border border-gray-400 rounded-sm p-2 "/>
            </div>

            <div className=" space-y-2 col-span-2">
                <p className="font-medium text-start">Permisos de Acceso</p>
                <div className="grid grid-cols-2 bg-gray-100 rounded-sm border border-gray-300">
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input value={permiso?.cliente} checked={permiso.cliente} onChange={onCheckboxChange} type="checkbox" name="permiso" id="cliente" className="scale-125" />
                        <label htmlFor="cliente" className="font-medium">Clientes</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.producto}   className="scale-125" id="producto" onChange={onCheckboxChange} value={permiso?.producto}/>
                        <label htmlFor="producto" className="font-medium">Productos</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.venta}  className="scale-125" id="venta" onChange={onCheckboxChange} value={permiso?.venta} />
                        <label htmlFor="venta" className="font-medium">Ventas</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.recibo}  className="scale-125" id="recibo" onChange={onCheckboxChange} value={permiso?.recibo}/>
                        <label htmlFor="recibo" className="font-medium">Recibos</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.consultar}  className="scale-125" id="consultar" onChange={onCheckboxChange} value={permiso?.consultar}/>
                        <label htmlFor="consultar" className="font-medium">Consultar Cuenta Corriente</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.numero}  className="scale-125" id="numero" onChange={onCheckboxChange} value={permiso?.numero} />
                        <label htmlFor="numero" className="font-medium">Numeros</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.servicioTecnico}  className="scale-125" id="servicioTecnico" onChange={onCheckboxChange} value={permiso?.servicioTecnico} />
                        <label htmlFor="servicioTecnico" className="font-medium">Servicio Tecnico</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.remito}  className="scale-125" id="remito" onChange={onCheckboxChange} value={permiso?.remito} />
                        <label htmlFor="remito" className="font-medium">Remito</label>
                    </div>
                    <div className="h-12 flex justify-start items-center gap-2 px-5">
                        <input type="checkbox" name="permiso" checked={permiso.usuario}  className="scale-125" id="usuario" onChange={onCheckboxChange} value={permiso?.usuario} />
                        <label htmlFor="usuario" className="font-medium">Usuario</label>
                    </div>
                </div>
                <p className="text-gray-600 text-xs text-start">Selecciones las secciones a las que el vendedor tendra Acceso</p>
            </div>

            
        </form>
        <div className="flex gap-4 mt-5 justify-end ml-auto w-xs">
                <Button type="secondary" text="Cancelar" click={() => setAddUsuario(false)}/>
                {usuarioActive 
                ? (<Button text="Modificar Vendedor" click={modificarUsuario}/>) 
                : (<Button text="Crear Vendedor" click={agregarUsuario}/>)
            }
        </div>
      </div>
    </div>
  );
}
