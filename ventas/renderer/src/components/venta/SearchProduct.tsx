import { useEffect, useRef, useState } from "react";
import { useForm } from "../../hooks/Useform"
import { useVentaStore } from "../../hooks/useVentaStore";
import { CardProductoVenta } from "./CardProductoVenta";


const initialState  = {
    codigo: '',
    cantidad: 1,
    descripcion: '',
    iva: "21.00",
    precio: 0.00
}


export const SearchProduct = () => {

    const { productos, startTraerProductosParaVentas, startClearProductosParaVentas, productoActivo, startAgregarProductoAVentaActiva } = useVentaStore();

    const {codigo, cantidad, descripcion, iva, precio, onInputChange} = useForm(productoActivo ?? initialState);

    const [bandera, setBandera] = useState<Boolean>(false);

    const codigoRef = useRef<HTMLInputElement>(null)
    const cantidadRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(!bandera){
            codigo === '' ? startClearProductosParaVentas() : startTraerProductosParaVentas(codigo);
            // cantidadRef.current?.focus();
        }else{
            setBandera(false);
        };
    }, [codigo]);

    const pasarFoco = () => {
        cantidadRef.current?.focus();
        cantidadRef.current?.select();
    };

    const agregarProductoAVentas = (e) => {
        if(e.key === 'Enter'){
            productoActivo && startAgregarProductoAVentaActiva(productoActivo, cantidad);
            codigoRef.current?.focus();
        }
    }

return (
    <form className="m-2 rounded-lg text-card-foreground shadow-sm mb-2 bg-[#E8D4B0] border-2 border-[#8B4513]">
        <div className="grid grid-cols-6 gap-2 p-2">
            <div className="flex flex-col">
                <label htmlFor="" className="text-sm font-bold text-[#8B4513]">Codigo</label>
                <input type="text" ref={codigoRef} className="border border-gray-400 bg-white rounded-lg px-2 py-1" value={codigo} name="codigo" onChange={onInputChange} id="codigo" />
            </div>

            {productos.length > 0 && (
                            <div className="absolute top-68  mx-5 left-0 right-0 z-50 mt-1">
                            <div className= "bg-white border-2 border-[#8B4513] rounded-lg max-h-60 overflow-y-auto max-w-[300px]">
                                    { productos.map(producto => (
                                        <CardProductoVenta key={producto._id} setBandera={setBandera} pasarFoco={pasarFoco}  {...producto}/>
                                    ))}
                                </div>
                            </div>
                        )}

            <div className="flex flex-col">
                <label htmlFor="cantidad" className="text-sm font-bold text-[#8B4513]">Cantidad</label>
                <input ref={cantidadRef} onKeyUp={agregarProductoAVentas} className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="cantidad" onChange={onInputChange} value={cantidad ? cantidad : '1.00'} id="cantidad" />
            </div>

            <div className="flex flex-col col-span-2">
                <label htmlFor="descripcion" className="text-sm font-bold text-[#8B4513]">Descripcion</label>
                <input type="text" className="border border-gray-400 bg-white rounded-lg px-2 py-1" name="descripcion" id="descripcion" value={descripcion} onChange={onInputChange} />
            </div>

            <div className="flex flex-col">
                <label htmlFor="iva" className="text-sm font-bold text-[#8B4513]">Iva</label>
                <select name="iva" id="iva" className="border border-gray-400 bg-white rounded-sm px-2 py-1" value={iva.toString()} onChange={onInputChange}>
                    <option value="00">00.00 %</option>
                    <option value="10.5">10.50 %</option>
                    <option value="21" >21.00 %</option>
                    <option value="27">27.00 %</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="precio" className="text-sm font-bold text-[#8B4513]">Precio</label>
                <input type="text" className="border border-gray-400 bg-white rounded-lg px-2 py-1" name="precio" id="precio" value={precio?.toFixed(2)} onChange={onInputChange}/>
            </div>
        </div>
    </form>
  )
}
