import { IoMdAdd } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { useForm, useMovimientoStore, useProductoStore, useUsuarioStore } from "../../hooks"
import { Movimiento, MovimientoAdd } from "../../types/movimiento"
import { useEffect, useState } from "react"
import { Button } from "../Button"

interface Props {
    setModalAddMovimiento: (arg: boolean) => void
};

const initialState: MovimientoAdd = {
    tipo: '',
    cantidad: 0,
    stockAntes: 0,
    numeroComprobante: '0000',
    nroSerie: '',
    creadoPor: '',
    stockAhora: 0,
    producto: '',
}

export const AddMovimiento = ({ setModalAddMovimiento }: Props) => {
    const { productoActive, limpiarProductoActivo} = useProductoStore();
    const { usuarioActive } = useUsuarioStore();
    const { startAgregarMovimento } = useMovimientoStore();
    const [mov, setMov] = useState<MovimientoAdd>({...initialState, producto: productoActive?.descripcion, stockAntes: productoActive?.stock});

    const [enviado, setEnviado] = useState<boolean>(false);

    useEffect(() => {
        setMov({...initialState, producto: productoActive?._id, stockAntes: productoActive?.stock, numeroComprobante: '0000'})
    }, [productoActive]);

    const { tipo, cantidad, stockAntes, numeroComprobante, nroSerie, onInputChange, formState} = useForm(mov || initialState);
    
    useEffect(() => {
        let valueAux = (tipo === 'RESTA' ? parseFloat(stockAntes) - parseFloat(cantidad) : parseFloat(stockAntes) + parseFloat(cantidad)).toFixed(2)

       onInputChange({target:{name: 'stockAhora',value: valueAux}} as React.ChangeEvent<HTMLInputElement>) 
    }, [cantidad]);


    const cancelar = () => {
        limpiarProductoActivo()
        setModalAddMovimiento(false);
    };

    const agregarMovimientoStock = async() => {
        setEnviado(true);

        if(tipo === '' || cantidad === '' || numeroComprobante === '') return;

        const mov = {
            ...formState,
            precio: 0,
            creadoPor: usuarioActive?._id
        };
        
        const ok = await startAgregarMovimento(mov);

        if(ok){
            limpiarProductoActivo()
            setModalAddMovimiento(false);
        }

    }

return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
        <div className="bg-white p-6 rounded shadow-md text-center w-full mx-52">
            <div className="flex justify-between mx-10">
                <div>
                    <div className="flex gap-5">
                        <IoMdAdd size={25} className="text-green-600"/>
                        <h3 className="text-xl font-semibold">Nuevo Movimiento de Stock</h3>
                    </div>
                    <p className="text-gray-600">Registrar Movimiento para: {productoActive?.descripcion}</p>
                </div>
                <div>
                    <IoClose onClick={cancelar} size={20} className="text-gray-500 hover:text-gray-700 cursor-pointer"/>
                </div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="mb-1 text-start font-semibold">Producto * </label>
                    <input disabled onChange={onInputChange} value={productoActive?.descripcion} type="text" className="border rounded-sm border-gray-300 placeholder:text-gray-600 px-2 py-1 bg-gray-200" placeholder="Productos"/>
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="tipo" className="mb-1 text-start font-semibold">Tipo de Movimiento * </label>
                    <select onChange={onInputChange}  name="tipo" value={tipo} id="tipo" className="border rounded-sm border-gray-300 placeholder:text-gray-600 px-2 py-1">
                        <option value="">---Seleccionar una opcion</option>
                        <option value="COMPRA">Compra (+)</option>
                        <option value="SUMA">Suma (+)</option>
                        <option value="RESTA">Resta (-)</option>
                    </select>
                    {!tipo && enviado && <p className="text-red-600">El tipo es obligatorio</p>}
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="cantidad" className="mb-1 text-start font-semibold">Cantidad * </label>
                    <input onChange={onInputChange} type="number" value={cantidad} name="cantidad" id="cantidad" className="border rounded-sm border-gray-300 placeholder:text-gray-600 px-2 py-1" placeholder="Ej: 10"/>
                    {cantidad === '' && enviado && <p className="text-red-600">La cantidad es obligatoria</p>}
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="stockAntes" className="mb-1 text-start font-semibold">Stock Actual</label>
                    <input disabled onChange={onInputChange} type="text" name="stockAntes" id="stockAntes" value={stockAntes.toFixed(2)} className="border rounded-sm border-gray-300 placeholder:text-gray-600 px-2 py-1 bg-gray-200" placeholder="Ej: 50"/>
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="numeroComprobante" className="mb-1 text-start font-semibold">Numero de Factura</label>
                    <input onChange={onInputChange} type="text" name="numeroComprobante" value={numeroComprobante} id="numeroComprobante" className="border rounded-sm border-gray-300 placeholder:text-gray-600 px-2 py-1" placeholder="Productos"/>
                    {numeroComprobante === '' && enviado && <p className="text-red-600">El numero Comprobante no puede estar vacio</p>}
                </div>

                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="mb-1 text-start font-semibold">Numero de Series</label>
                    <textarea onChange={onInputChange} name="nroSerie" id="nroSerie" value={nroSerie} className="border rounded-sm border-gray-300 placeholder:text-gray-600 px-2 py-1" placeholder="Productos">
                        
                    </textarea>
                </div>
            </form>

            <div className="flex justify-end mt-15 w-xs gap-5 ml-auto">
                <Button text="Cancelar" type="secondary" click={cancelar} className="border-gray-400 border"/>
                <Button text="Aceptar"  click={agregarMovimientoStock} />
            </div>

        </div>
    </div>
  )
}
