import { useForm } from "../../hooks/Useform"


const initialState = {
    codigo: '',
    cantidad: '1.00',
    descripcion: '',
    iva: '21.00',
    precio: '0.00'
}


export const SearchProduct = () => {

    const {codigo, cantidad, descripcion, iva,  precio, onInputChange} = useForm(initialState);

  return (
    <form className="m-2 rounded-lg text-card-foreground shadow-sm mb-2 bg-[#E8D4B0] border-2 border-[#8B4513]">
        <div className="grid grid-cols-5 gap-2 p-2">
            <div className="flex flex-col">
                <label htmlFor="" className="text-sm font-bold text-[#8B4513]">Codigo</label>
                <input type="text" className="border border-gray-400 bg-white rounded-lg px-2 py-1" value={codigo} name="codigo" onChange={onInputChange} id="codigo" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="cantidad" className="text-sm font-bold text-[#8B4513]">Cantidad</label>
                <input className="border border-gray-400 bg-white rounded-lg px-2 py-1" type="text" name="cantidad" onChange={onInputChange} value={cantidad} id="cantidad" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="descripcion" className="text-sm font-bold text-[#8B4513]">Descripcion</label>
                <input type="text" className="border border-gray-400 bg-white rounded-lg px-2 py-1" name="descripcion" id="descripcion" value={descripcion} onChange={onInputChange} />
            </div>

            <div className="flex flex-col">
                <label htmlFor="iva" className="text-sm font-bold text-[#8B4513]">Iva</label>
                <select name="iva" id="iva" className="border border-gray-400 bg-white rounded-sm px-2 py-1" value={iva} onChange={onInputChange}>
                    <option value="00.00">00.00 %</option>
                    <option value="10.50">10.50 %</option>
                    <option value="21.00" >21.00 %</option>
                    <option value="27.00">27.00 %</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="precio" className="text-sm font-bold text-[#8B4513]">Precio</label>
                <input type="text" className="border border-gray-400 bg-white rounded-lg px-2 py-1" name="precio" id="precio"  value={precio} onChange={onInputChange}/>
            </div>
        </div>
    </form>
  )
}
