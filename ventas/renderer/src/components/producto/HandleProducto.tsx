import { useForm } from "../../hooks";
import { useProductoStore } from "../../hooks/useProductoStore"
import { Producto } from "../../types/producto";
interface useProductoStoreProps {
    
    productoActive: Producto | null,
    productos: Producto[],
    
}

interface Props {
    setButtonActive: (arg: boolean) => void
};

const initialState = {
    codigo: '',
    codigoFabrica: '',
    descripcion: '',
    marca: '',
    provedor: '',
    categoria: '',
    unidadMedida: '',
    costo: '',
    iva: '',
    utilidad: '',
    precio: '',
    stock: '',
    stockMinimo: '',
    observaciones: '',
    
}

const HandleProducto = ({ setButtonActive}): Props => {
    const { productoActive }: useProductoStoreProps = useProductoStore();

    const { codigo, codigoFabrica, descripcion, costo, marca, categoria, provedor, unidadMedida, iva, utilidad, precio, stock, stockMinimo, observaciones, onInputChange} = useForm(productoActive ? productoActive : initialState);

  return (
    <div className="mx-10 border border-gray-200">
        <h3 className="text-2xl m-5">{productoActive ? 'Modificar Producto' : 'Agregar Producto'}</h3>
        <form>
            <div className="grid grid-cols-3 gap-5 py-5 bg-white px-5">
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="codigo">Codigo *</label>
                    <input onChange={onInputChange} value={codigo} className='border border-gray-200 rounded-sm p-1' placeholder='Codigo' type="number" name="codigo" id="codigo" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="codigoFabrica">Fabrica </label>
                    <input onChange={onInputChange} value={codigoFabrica} className='border border-gray-200 rounded-sm p-1' placeholder='codigoFabrica' type="number" name="codigoFabrica" id="codigoFabrica" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="descripcion">Descripcion *</label>
                    <input onChange={onInputChange} value={descripcion} className='border border-gray-200 rounded-sm p-1' placeholder='Descripcion' type="number" name="descripcion" id="descripcion" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="marca">Marca</label>
                    <select className='p-1 border border-gray-200 rounded-md' name="marca" value={marca} id="marca"></select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="categoria">Categoria</label>
                    <select className='p-1 border border-gray-200 rounded-md' name="categoria" value={categoria} id="categoria"></select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="provedor">Provedor</label>
                    <select className='p-1 border border-gray-200 rounded-md' name="provedor" value={provedor} id="provedor"></select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="unidadMedida">Unidad Medida</label>
                    <select className='p-1 border border-gray-200 rounded-md' name="unidadMedida" value={unidadMedida} id="unidadMedida"></select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="costo">Costo *</label>
                    <input onChange={onInputChange} value={costo} className='border border-gray-200 rounded-sm p-1' placeholder='costo' type="number" name="costo" id="costo" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="utilidad">Utilidad (%)*</label>
                    <input onChange={onInputChange} value={utilidad} className='border border-gray-200 rounded-sm p-1' placeholder='utilidad' type="number" name="utilidad" id="utilidad" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="precio">Precio Final *</label>
                    <input onChange={onInputChange} value={precio} className='border border-gray-200 rounded-sm p-1' placeholder='precio' type="number" name="precio" id="precio" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="stock">Stock Inicial *</label>
                    <input onChange={onInputChange} value={stock} className='border border-gray-200 rounded-sm p-1' placeholder='stock' type="number" name="stock" id="stock" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="stockMinimo">StockMinimo Minimo *</label>
                    <input onChange={onInputChange} value={stockMinimo} className='border border-gray-200 rounded-sm p-1' placeholder='stockMinimo' type="number" name="stockMinimo" id="stockMinimo" />
                </div>
            </div>
            <div className="flex justify-end">
                <button>Cancelar</button>
                <button>Modificar</button>
                <button>Agregar</button>
            </div>
        </form>
    </div>
  )
}

export default HandleProducto