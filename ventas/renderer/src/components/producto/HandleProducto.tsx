import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Producto } from "../../types/producto";

import { useForm, useMarcaStore } from "../../hooks";
import { useCategoriaStore } from "../../hooks/useCategoriaStore";
import { useProductoStore } from "../../hooks/useProductoStore"
import { useProvedorStore } from "../../hooks/useProvedorStore";
import { useUnidadMedidaStore } from "../../hooks/useUnidadMedidaStore";
import { useVariableStore } from "../../hooks/useVariableStore";


interface Props {
    setButtonActive: (arg: string) => void
};

const initialState: Producto = {
    _id: '',
    codigo: '',
    codigoFabrica: '',
    descripcion: '',
    marca: {_id: '', nombre: '', descripcion: ''},
    provedor: {_id: '', nombre: ''},
    categoria: {_id: '', nombre: '', descripcion: '', activo: true},
    unidadMedida: {_id: '', nombre: '', abreviatura: '', permiteDecimal: false, activo: true, tipo: ''},
    costo: 0,
    costoDolar: 0,
    iva: 0,
    costoIva: 0,
    utilidad: 0,
    precio: 0,
    stock: 0,
    stockMinimo: 0,
    detalle: '',
};

const HandleProducto = ({ setButtonActive }: Props) => {
    const { startAgregarProducto, productoActive, startModificarProducto, limpiarProductoActivo } = useProductoStore();
    const { marcas } = useMarcaStore();
    const { categorias } = useCategoriaStore();
    const { provedores } = useProvedorStore();
    const { unidadMedidas } = useUnidadMedidaStore();

    const { startTraerDolar, variableActive } = useVariableStore();

    const [enviado, setEnviado] = useState<boolean>(false);

    const { codigo, codigoFabrica, descripcion, costo, costoDolar, costoIva, marca, categoria, provedor, unidadMedida, iva, utilidad, precio, stock, stockMinimo, detalle, onInputChange, formState} = useForm(productoActive ? productoActive : initialState);
    const costoRef = useRef<HTMLInputElement>(null);
    const costoDolarRef = useRef<HTMLInputElement>(null);
    const ivaRef = useRef<HTMLSelectElement>(null);
    const costoIvaRef = useRef<HTMLInputElement>(null);
    const utilidadRef = useRef<HTMLInputElement>(null);
    const precioFinalRef = useRef<HTMLInputElement>(null);

    const apretarEnter = (e) => {
        if(e.key === 'Enter'){
            
            if(e.target.id === 'costo'){
                ivaRef.current?.focus();
            };
            
            if(e.target.id === 'iva'){
                e.preventDefault();
                utilidadRef.current?.focus();
            };

            if(e.target.id === 'utilidad'){
                precioFinalRef.current?.focus();
                onInputChange({target: {name: 'precio', value: calcularPrecioFinal()}} as React.ChangeEvent<HTMLInputElement>);
                if(precioFinalRef.current){
                    precioFinalRef.current.value = (parseFloat(costoIva) + (parseFloat(costoIva) * parseFloat(utilidad) / 100)).toFixed(2);
                }
            };
        }
    };

    const calcularPrecioFinal = () => {
        const costoIvaNumero = parseFloat(costoIvaRef.current!.value) || 0;
        const utilidadNumero = parseFloat(utilidadRef.current!.value) || 0;
        const nuevoPrecio = (costoIvaNumero + costoIvaNumero * utilidadNumero / 100);
        return nuevoPrecio.toFixed(2);
    };

    useEffect(() => {
        const costoNumero = parseFloat(costo) || 0;
        const ivaNumero = parseFloat(iva) || 0;
        const nuevoCostoIva = (costoNumero + costoNumero * ivaNumero / 100).toFixed(2);
        costoIvaRef.current!.value = nuevoCostoIva;
        onInputChange({target: {name: 'costoIva', value: nuevoCostoIva}} as React.ChangeEvent<HTMLInputElement>);
    }, [costo, iva]);

    useEffect(() => {
        onInputChange({target: {name: 'precio', value: calcularPrecioFinal()}} as React.ChangeEvent<HTMLInputElement>);
    }, [utilidad]);

    useEffect(() => {
        startTraerDolar();
    }, []);


    const agregarProducto = async(e) => {
        e.preventDefault();
        setEnviado(true);

        if(codigo === '') return 
        if(descripcion === '') return 
        if(costo === '') return 
        if(costoDolar === '') return 
        if(utilidad === '') return 
        if(precio === '') return 

        startAgregarProducto(formState as Producto);

        setButtonActive('listado');
    };

    const cancelar = () => {
        setButtonActive('listado');
        limpiarProductoActivo();

    }

    const modificarProducto = async(e) => {
        startModificarProducto(formState);
        setButtonActive('listado');
    };

return (
    <div className="m-2 min-h-[calc(100vh-150px)]">
        <h3 className="text-2xl p-5 bg-chocolate-200">{productoActive ? 'Modificar Producto' : 'Agregar Producto'}</h3>
        <form className="border-gray-200 border rounded-sm">
            <div className="grid grid-cols-4 gap-5 bg-white px-5">
                <div className='flex flex-col col-span-2'>
                    <label className='font-medium mb-1 ' htmlFor="codigo">Codigo *</label>
                    <input onChange={onInputChange} disabled={productoActive ? true : false} value={codigo} className={`${productoActive ? 'bg-gray-200' : ''} border border-gray-400 rounded-sm p-1`} placeholder='Codigo' type="text" name="codigo" id="codigo" />
                    { ( !codigo && enviado) && <p className="text-red-600 text-xs">El Codigo es Obligatorio</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="codigoFabrica">Fabrica</label>
                    <input onChange={onInputChange} value={codigoFabrica} className='border border-gray-400 rounded-sm p-1' placeholder='codigoFabrica' type="text" name="codigoFabrica" id="codigoFabrica" />
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="dolar">Dolar</label>
                    <input onChange={onInputChange} className='border border-gray-400 rounded-sm p-1 bg-gray-300' placeholder='Dolar' type="number" value={(variableActive && variableActive.clave === 'DOLAR') ? `${variableActive.valor}` : '0.00'} name="dolar" id="dolar" disabled  />
                </div>

                <div className='flex flex-col col-span-4'>
                    <label className='font-medium mb-1' htmlFor="descripcion">Descripcion *</label>
                    <input onChange={onInputChange} value={descripcion} className='border border-gray-400 rounded-sm p-1' placeholder='Descripcion' type="text" name="descripcion" id="descripcion" />
                    { ( !descripcion && enviado) && <p className="text-red-600 text-xs">La descripcion es Obligatoria</p>}
                </div>

                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="marca">Marca</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-400 rounded-md' name="marca" value={marca?._id} id="marca">
                        <option value="">---Seleccionar Opcion---</option>
                        {marcas.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="categoria">Categoria</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-400 rounded-md' name="categoria" value={categoria?._id} id="categoria">
                        <option value="">---Seleccionar Opcion---</option>
                        {categorias.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="provedor">Provedor</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-400 rounded-md' name="provedor" value={provedor?._id} id="provedor">
                        <option value="">---Seleccionar Opcion---</option>
                        { provedores.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="unidadMedida">Unidad Medida</label>
                    <select onChange={onInputChange} className='p-1 border border-gray-400 rounded-md' name="unidadMedida" value={unidadMedida?._id} id="unidadMedida">
                            <option value="">---Seleccionar Opcion---</option>
                        {unidadMedidas.map(elem => (
                            <option value={elem._id} key={elem._id}>{elem.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="costo">Costo *</label>
                    <input onChange={onInputChange} value={costo} className='border border-gray-400 rounded-sm p-1' onKeyDown={apretarEnter} ref={costoRef} placeholder='costo' type="number" name="costo" id="costo" />
                    { ( costo === '' && enviado) && <p className="text-red-600 text-xs">El Costo es Obligatorio</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="costoDolar">Costo Dolar*</label>
                    <input onChange={onInputChange} value={costoDolar} className='border border-gray-400 rounded-sm p-1' onKeyDown={apretarEnter} ref={costoDolarRef} placeholder='costoDolar' type="number" name="costoDolar" id="costoDolar" />
                    { ( costoDolar === '' && enviado) && <p className="text-red-600 text-xs">El Costo Dolar es Obligatorio</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="iva">Iva (%)*</label>
                    <select name="iva" id="iva" onChange={onInputChange} className='p-1 border border-gray-400 rounded-md' onKeyDown={apretarEnter} ref={ivaRef} value={iva}>
                        <option value="0">0%</option>
                        <option value="10.5">10.5%</option>
                        <option value="21">21%</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="costoIva">Costo + Iva</label>
                    <input onChange={onInputChange} value={costoIva} className='border border-gray-400 rounded-sm p-1 bg-gray-300' placeholder='costoIva' ref={costoIvaRef} disabled type="number" name="costoIva" id="costoIva" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="utilidad">Utilidad (%)*</label>
                    <input onChange={onInputChange} value={utilidad} className='border border-gray-400 rounded-sm p-1' onKeyDown={apretarEnter} ref={utilidadRef} placeholder='utilidad' type="number" name="utilidad" id="utilidad" />
                    { ( utilidad === '' && enviado) && <p className="text-red-600 text-xs">La utilidad es Obligatoria</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="precio">Precio Final *</label>
                    <input onChange={onInputChange} value={precio} className='border border-gray-400 rounded-sm p-1'  ref={precioFinalRef} placeholder='precio' type="number" name="precio" id="precio" />
                    { ( precio === '' && enviado) && <p className="text-red-600 text-xs">El Precio es Obligatorio</p>}
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="stock">Stock Inicial *</label>
                    <input onChange={onInputChange} disabled={productoActive ? true : false} value={stock} className={`${productoActive ? 'bg-gray-300' : ''} border border-gray-400 rounded-sm p-1`} placeholder='stock' type="number" name="stock" id="stock" />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium mb-1' htmlFor="stockMinimo">Stock Minimo</label>
                    <input onChange={onInputChange} value={stockMinimo} className='border border-gray-400 rounded-sm p-1' placeholder='stockMinimo' type="number" name="stockMinimo" id="stockMinimo" />
                </div>

                <div className='flex flex-col col-span-4 bg-white pb-2'>
                    <label className='font-medium mb-1' htmlFor="observaciones">Observaciones</label>
                    <textarea name="detalle" value={detalle} onChange={onInputChange} id="detalle" placeholder="observaciones adicionales del producto" cols={10} rows={2} className="p-2 border-gray-400 border rounded-sm"></textarea>
                </div>
            </div>
        </form>

        <div className="flex justify-end bg-white p-2 gap-5">
            <button className="border border-gray-400 p-2 font-medium rounded-md cursor-pointer hover:bg-gray-100" onClick={cancelar}>Cancelar</button>
            { 
            productoActive 
                ? (<button type="button" onClick={modificarProducto} className="rounded-md p-2 font-medium cursor-pointer bg-yellow-500 text-gray-600 hover:bg-yellow-600">Modificar Producto</button>)
                : ( <button type="button" onClick={agregarProducto} className="rounded-md p-2 font-medium cursor-pointer bg-yellow-500 text-gray-600 hover:bg-yellow-600">Agregar Producto</button> )
            }
                
        </div>
    </div>
  )
}

export default HandleProducto