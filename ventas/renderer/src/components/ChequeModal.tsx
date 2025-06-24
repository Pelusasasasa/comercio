import { IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";
import { useReciboStore } from "../hooks/useReciboStore";
import { useForm } from "../hooks/Useform";


export const ChequeModal = () => {

    const { reciboActive } = useReciboStore();
    const { fecha, cliente, importe, banco, fechaVencimiento, onInputChange } = useForm(reciboActive || {});
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80">
          <div className="bg-white p-6 rounded shadow-md text-center w-xl">
            <div className="flex flex-col">
                <div className="flex justify-between items-center px-4 pt-4 rounded-md">
                    <div className="flex items-center gap-2">
                        <IoDocumentTextOutline className="text-yellow-500" size={20}/>
                        <h3 className="text-xl font-medium">Detalles del Cheque</h3>
                        </div>
            
                    <IoCloseOutline size={20} className="hover:border hover:border-gray-500 cursor-pointer rounded-sm"/>
                </div>
                    <p className="text-gray-600 text-start">Complete los datos específicos del medio de pago seleccionado</p>
                </div>

                <form className="grid grid-cols-2 gap-5 mt-5">
                    <div className="flex flex-col">
                        <label className="text-start font-medium" htmlFor="fecha">Fecha Recibimiento</label>
                        <input className="border border-gray-300 rounded-sm p-2" type="date" disabled value={fecha} name="fecha" id="fecha" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-start font-medium" htmlFor="fechaVencimiento">Fecha de Vencimiento</label>
                        <input className="border border-gray-300 rounded-sm p-2" type="date" name="fechaVencimiento" id="fechaVencimiento" />
                    </div>

                    <div className="flex flex-col col-span-2">
                        <label className="text-start font-medium" htmlFor="cliente">Cliente</label>
                        <input onChange={onInputChange} className="border border-gray-300 rounded-sm p-2" type="text" value={cliente.nombre} name="cliente" id="cliente" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-start font-medium" htmlFor="importe">Importe</label>
                        <input className="border border-gray-300 rounded-sm p-2" value={importe} onChange={onInputChange} type="text" name="importe" id="importe" />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-start font-medium" htmlFor="banco">Banco</label>
                        <input className="border border-gray-300 rounded-sm p-2" type="text" name="banco" id="banco" />
                    </div>
                </form>
          </div>
        </div>
  )
};
