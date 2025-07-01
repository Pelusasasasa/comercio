import { useEffect } from "react";
import { useClienteStore } from "../../hooks/useClienteStore";
import { useForm } from "../../hooks/Useform";
import { useVentaStore } from "../../hooks/useVentaStore";
import { ClienteFormState } from "../../types/cliente";

const initialState: ClienteFormState = {
    _id: '',
    codigo: '',
    nombre: '',
    dni: '',
    telefono: '',
    direccion: '',
    localidad: '',
    condicionCuenta: '',
    condicionIva: '',
    observaciones: '',
    saldo: 0,
}

export const HeaderCliente = () => {
    const { clienteActivo, startTraerClienteParaVenta, startTraerClientesParaVentas, clientes } = useVentaStore()
    const { codigo, nombre, dni, telefono, direccion, localidad, condicionCuenta, observaciones, condicionIva, saldo,  onInputChange, setFormState } = useForm(clienteActivo ?? initialState);

    useEffect(() => {
        codigo && startTraerClientesParaVentas(codigo);
    }, [codigo])


  return (
    <main className="rounded-lg m-2 text-card-foreground shadow-sm mb-2 bg-[#E8D4B0] border-2 border-[#8B4513]">
        <form className=' grid grid-cols-5 gap-2 p-2 relative'>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="codigo">Codigo</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="codigo" id="codigo" placeholder="Por Codigo, Nombre, DNI" value={codigo} onChange={onInputChange}/>
            </div>
            <div className="absolute top-15 w-50 px-2 mx-2 left-0 right-0 z-50 mt-1 bg-white border-2 border-[#8B4513] rounded-lg max-h-60 overflow-y-auto">
                { clientes.map(cliente => (
                    <p>{cliente.nombre}</p>
                ))}
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="nombre">Nombre</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="nombre" id="nombre" placeholder="Nombre..." value={nombre || ''} onChange={onInputChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="dni">DNI</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="dni" id="dni" placeholder="00000000" value={dni || ''} onChange={onInputChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="saldo">Saldo</label>
                <input className="border border-gray-400 bg-gray-200 rounded-lg px-2 py-1" type="text" disabled name="saldo" id="saldo" placeholder="35000" value={saldo || 0} onChange={onInputChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="lista">Lista</label>
                <select name="lista" id="lista" className="border border-gray-400 bg-white rounded-sm px-2 py-1" >
                    <option value="NORMAL">Normal</option>
                    <option value="INSTALADOR">Instalador</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="telefono">Telefono</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="telefono" id="telefono" placeholder="3456440023" value={telefono || ''} onChange={onInputChange} />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="localidad">Localidad</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="localidad" id="localidad" placeholder="Chajari" value={localidad || ''} onChange={onInputChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="direccion">Direccion</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="direccion" id="direccion" placeholder="Direccion" value={direccion || ''} onChange={onInputChange}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="">Condicion Iva</label>
                <select name="condicionIva" id="condicionIva" className="border border-gray-400 bg-white rounded-lg px-2 py-1" value={condicionIva || 'CONSUMIDOR FINAL'} onChange={onInputChange}>
                    <option value="CONSUMIDOR FINAL">Consumidor Final</option>
                    <option value="MONOTRIBUTO">Monotributo</option>
                    <option value="INSCRIPTO">Responsable Inscripto</option>
                    <option value="EXENTO">Exento</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="observaciones">Observaciones</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="observaciones" id="observaciones" placeholder="Observaciones" value={observaciones || ''} onChange={onInputChange}/>
            </div>
        </form>
    </main>
  )
}
