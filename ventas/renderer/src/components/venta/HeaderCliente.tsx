import { useEffect, useState } from "react";
import { useForm } from "../../hooks/Useform";
import { useVentaStore } from "../../hooks/useVentaStore";
import { ClienteFormState } from "../../types/cliente";
import { CardClienteVenta } from "./CardClienteVenta";

const initialState: ClienteFormState = {
    _id: '',
    codigo: 0,
    nombre: '',
    dni: '',
    telefono: '',
    direccion: '',
    localidad: '',
    condicionCuenta: '',
    condicionIva: '',
    tipoCuenta: '',
    observaciones: '',
    saldo: 0,
}

export const HeaderCliente = () => {
    const { clienteActivo, startTraerClientesParaVentas, startClearClientesParaVentas, clientes, startLimpiarClienteActivo } = useVentaStore()
    const { codigo, nombre, dni, telefono, direccion, localidad, condicionCuenta, tipoCuenta, observaciones, condicionIva, saldo,  onInputChange, setFormState } = useForm(clienteActivo ?? initialState);

    const [bandera, setBandera] = useState<boolean>(false);

    useEffect(() => {
        
        if(!bandera){
            codigo === '' ? startClearClientesParaVentas()  : startTraerClientesParaVentas(codigo);
        }else{
            
            setBandera(false)
        };
        
    }, [codigo])

  return (
    <main className="rounded-lg m-2 text-card-foreground shadow-sm mb-2 bg-[#E8D4B0] border-2 border-[#8B4513]">
        <form className=' grid grid-cols-5 gap-2 p-2 relative'>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="codigo">Codigo</label>
                <input autoFocus className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="codigo" id="codigo" placeholder="Por Codigo, Nombre, DNI" value={codigo} onChange={onInputChange}/>
            </div>
            {clientes.length > 0 && (
                <div className="absolute top-15 w-50  mx-2 left-0 right-0 z-50 mt-1">
                <div className= "bg-white border-2 border-[#8B4513] rounded-lg max-h-60 overflow-y-auto w-[243px]">
                        { clientes.map(cliente => (
                            <CardClienteVenta key={cliente._id} setBandera={setBandera} {...cliente}/>
                        ))}
                    </div>
                </div>
            )}
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="nombre">Nombre</label>
                <input className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} type="text" name="nombre" id="nombre" placeholder="Nombre..." value={nombre || ''} onChange={onInputChange} disabled={clienteActivo?.codigo !== 1}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="dni">DNI</label>
                <input className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} type="text" name="dni" id="dni" placeholder="00000000" value={dni || ''} onChange={onInputChange} disabled={clienteActivo?.codigo !== 1}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="saldo">Saldo</label>
                <input className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} type="text" disabled name="saldo" id="saldo" placeholder="35000" value={saldo || 0} onChange={onInputChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="lista">Lista</label>
                <select name="lista" id="lista" className="border border-gray-400 bg-white rounded-sm px-2 py-1" value={tipoCuenta} onChange={onInputChange} >
                    <option value="NORMAL">Normal</option>
                    <option value="INSTALADOR">Instalador</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="telefono">Telefono</label>
                <input className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} type="text" name="telefono" id="telefono" placeholder="3456440023" value={telefono || ''} onChange={onInputChange} disabled={clienteActivo?.codigo !== 1}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="localidad">Localidad</label>
                <input className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} type="text" name="localidad" id="localidad" placeholder="Chajari" value={localidad || ''} onChange={onInputChange} disabled={clienteActivo?.codigo !== 1}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="direccion">Direccion</label>
                <input className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} type="text" name="direccion" id="direccion" placeholder="Direccion" value={direccion || ''} onChange={onInputChange} disabled={clienteActivo?.codigo !== 1}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="">Condicion Iva</label>
                <select name="condicionIva" id="condicionIva" className={`border border-gray-400  rounded-lg px-2 py-1 ${clienteActivo?.codigo !== 1 ? 'bg-gray-200' : 'bg-white'}`} value={condicionIva || 'CONSUMIDOR FINAL'} onChange={onInputChange} disabled={clienteActivo?.codigo !== 1}>
                    <option value="CONSUMIDOR FINAL">Consumidor Final</option>
                    <option value="MONOTRIBUTO">Monotributo</option>
                    <option value="INSCRIPTO">Responsable Inscripto</option>
                    <option value="EXENTO">Exento</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="observaciones">Observaciones</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="observaciones" id="observaciones" placeholder="Observaciones" value={observaciones || ''} onChange={onInputChange} />
            </div>
        </form>
    </main>
  )
}
