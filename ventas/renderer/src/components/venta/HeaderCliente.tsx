import { useClienteStore } from "../../hooks/useClienteStore";
import { useForm } from "../../hooks/Useform";
import { useVentaStore } from "../../hooks/useVentaStore";

const initialState = {
    

}

export const HeaderCliente = () => {
    const { ventaActive } = useVentaStore()
    const { } = useForm(ventaActive ?? initialState)

  return (
    <main className="rounded-lg m-2 text-card-foreground shadow-sm mb-2 bg-[#E8D4B0] border-2 border-[#8B4513]">
        <form className=' grid grid-cols-5 gap-2 p-2'>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="codigo">Codigo</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="codigo" id="codigo" placeholder="1"/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="nombre">Nombre</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="nombre" id="nombre" placeholder="Nombre..."/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="cuit">Cuit</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="cuit" id="cuit" placeholder="00000000"/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="saldo">Saldo</label>
                <input className="border border-gray-400 bg-gray-200 rounded-lg px-2 py-1" type="text" disabled name="saldo" id="saldo" placeholder="35000"/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="lista">Lista</label>
                <select name="lista" id="lista" className="border border-gray-400 bg-white rounded-sm px-2 py-1">
                    <option value="NORMAL">Normal</option>
                    <option value="INSTALADOR">Instalador</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="telefono">Telefono</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="telefono" id="telefono" placeholder="3456440023" />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="localidad">Localidad</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="localidad" id="localidad" placeholder="Chajari"/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="direccion">Direccion</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="direccion" id="direccion" placeholder="Direccion"/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="">Condicion Iva</label>
                <select name="condicionIva" id="condicionIva" className="border border-gray-400 bg-white rounded-lg px-2 py-1">
                    <option value="CONSUMIDOR FINAL">Consumidor Final</option>
                    <option value="MONOTRIBUTO">Monotributo</option>
                    <option value="INSCRIPTO">Responsable Inscripto</option>
                    <option value="EXENTO">Exento</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-bold text-[#8B4513]" htmlFor="observaciones">Observaciones</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="observaciones" id="observaciones" placeholder="Observaciones"/>
            </div>
        </form>
    </main>
  )
}
