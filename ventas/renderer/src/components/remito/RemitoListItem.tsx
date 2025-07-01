import { GoCalendar, GoPerson } from "react-icons/go"
import { Remito } from "../../types/remito"
import { useMovimientoStore, useRemitoStore } from "../../hooks";

export const RemitoListItem = ({_id, fecha, cliente, nombreCliente, tipoComprobante, pasado, numeroComprobante, observaciones}: Remito) => {

    const {traerMovimientosPorTipoYNumero } = useMovimientoStore();
    const { activeRemito, remitoActive, remitosParaCuentaCorriente, startAgregarRemitoParaCTACTE} = useRemitoStore();

    const traerMovimientos = () => {
        traerMovimientosPorTipoYNumero('REMITO', numeroComprobante);
        _id && activeRemito(_id)
    };

    const agregarRemitoACuentaCorriente = () => {
        _id && startAgregarRemitoParaCTACTE(_id)
    };

  return (
    <tr className={`bg-white hover:bg-yellow-50 border border-gray-200 rounded-sm hover:cursor-pointer ${remitoActive?._id === _id ? 'bg-yellow-100' : ''} `} onClick={traerMovimientos}>
        <td className="py-2">
            <div className="flex gap-2 items-center">
                <GoCalendar className="text-gray-500"/>
                <p>{fecha.slice(0, 10).split('-', 3).reverse().join('/')}</p>    
            </div>    
        </td>
        <td className="py-2">
            <div className="flex gap-2 items-center">
                <GoPerson className="text-gray-500"/>
                <p>{cliente.codigo}</p>
            </div>
        </td>
        <td className="py-2">
            <div className="flex gap-2 items-center">
                <GoPerson className="text-gray-500"/>
                <p>{nombreCliente}</p>
            </div>
        </td>

        <td className="py-2">
            <p className="inline-flex border rounded-sm px-1 bg-gray-200 border-gray-200">{numeroComprobante}</p>
        </td>

        <td>{observaciones}</td>

        <td>
            { !pasado && <div className="flex p-2">
                <input type="checkbox" name={_id} id={_id} className="scale-125" onClick={agregarRemitoACuentaCorriente}/>
            </div>}
        </td>
    </tr>
  )
};
