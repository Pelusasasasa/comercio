import { useForm, useMarcaStore } from "../../hooks";
import { useCategoriaStore } from "../../hooks/useCategoriaStore";
import { useProductoStore } from "../../hooks/useProductoStore"
import { useProvedorStore } from "../../hooks/useProvedorStore";
import { useUnidadMedidaStore } from "../../hooks/useUnidadMedidaStore";
import { Producto } from "../../types/producto";

interface useProductoStoreProps {
    productoActive: Producto | null,
    productos: Producto[],
    startAgregarProducto: (arg: Producto) => void,
    startBorrarProducto: (arg: string) => void,
    startModificarProducto: (arg: Producto) => void,
    startTraerProductos: () => void
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

const HandleProducto = ({ setButtonActive }): Props => {
    const { productoActive, startAgregarProducto }: useProductoStoreProps = useProductoStore();
    const { marcas } = useMarcaStore();
    const { categorias } = useCategoriaStore();
    const { provedores } = useProvedorStore();
    const { unidadMedidas } = useUnidadMedidaStore();

    const { codigo, codigoFabrica, descripcion, costo, marca, categoria, provedor, unidadMedida, iva, utilidad, precio, stock, stockMinimo, observaciones, onInputChange, formState} = useForm(productoActive ? productoActive : initialState);

    const agregarProducto = (e) => {
        e.preventDefault()
        startAgregarProducto(formState as Producto);
    };

  return (
    <div className="mx-10 border border-gray-200">
        <h3 className="text-2xl m-5">{productoActive ? 'Modificar Producto' : 'Agregar Producto'}</h3>
        <form onSubmit={agregarProducto}>
            <div className="grid grid-cols-3 gap-5 py-5 bg-white px-5">
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="codigo">Codigo *</label>
                    <input onChange={onInputChange} value={codigo} className='border border-gray-200 rounded-sm p-1' placeholder='Codigo' type="text" name="codigo" id="codigo" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="codigoFabrica">Fabrica</label>
                    <input onChange={onInputChange} value={codigoFabrica} className='border border-gray-200 rounded-sm p-1' placeholder='codigoFabrica' type="text" name="codigoFabrica" id="codigoFabrica" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="descripcion">Descripcion *</label>
                    <input onChange={onInputChange} value={descripcion} className='border border-gray-200 rounded-sm p-1' placeholder='Descripcion' type="text" name="descripcion" id="descripcion" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="marca">Marca</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-200 rounded-md' name="marca" value={marca} id="marca">
                        <option value="">---Seleccionar Opcion---</option>
                        {marcas.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="categoria">Categoria</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-200 rounded-md' name="categoria" value={categoria} id="categoria">
                        <option value="">---Seleccionar Opcion---</option>
                        {categorias.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="provedor">Provedor</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-200 rounded-md' name="provedor" value={provedor} id="provedor">
                        <option value="">---Seleccionar Opcion---</option>
                        { provedores.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="unidadMedida">Unidad Medida</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-200 rounded-md' name="unidadMedida" value={unidadMedida} id="unidadMedida">
                            <option value="">---Seleccionar Opcion---</option>
                        {unidadMedidas.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="costo">Costo *</label>
                    <input onChange={onInputChange} value={costo} className='border border-gray-200 rounded-sm p-1' placeholder='costo' type="number" name="costo" id="costo" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="iva">Iva (%)*</label>
                    <select name="iva" id="iva" onChange={onInputChange} className='p-1 border border-gray-200 rounded-md' value={iva}>
                        <option value="0">0%</option>
                        <option value="10.5">10.5%</option>
                        <option value="21">21%</option>
                    </select>
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
                    <label className='font-medium mb-1' htmlFor="stockMinimo">Stock Minimo *</label>
                    <input onChange={onInputChange} value={stockMinimo} className='border border-gray-200 rounded-sm p-1' placeholder='stockMinimo' type="number" name="stockMinimo" id="stockMinimo" />
                </div>
            </div>
            <div className="flex justify-end bg-white pb-5 mx-2 gap-5">
                <button className="border border-gray-200 p-2 font-medium rounded-md cursor-pointer hover:bg-gray-100" onClick={() => setButtonActive('listado')}>Cancelar</button>
                { productoActive ? (
                    <button className="rounded-md p-2 font-medium cursor-pointer bg-yellow-500 text-gray-600 hover:bg-yellow-600">Modificar Producto</button>
                ) :
                ( <button type="submit" className="rounded-md p-2 font-medium cursor-pointer bg-yellow-500 text-gray-600 hover:bg-yellow-600">Agregar Producto</button> )}
                
            </div>
        </form>
    </div>
  )
}

export default HandleProducto