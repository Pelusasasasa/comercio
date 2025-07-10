
import { RxLightningBolt } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";
import { HiOutlineDocumentChartBar, HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useListadoStore } from "../hooks/useListadoStore";
import { toISOStringUTCMinus3 } from "../helpers";


export const NavbarPrincipal = () => {
  const navigate = useNavigate();
  const { startTraerListado } = useListadoStore();

  const [desplegarListado, setDesplegarListado] = useState<Boolean>(false);

  const navegarAListadoContado = (e) => {
    const fecha = toISOStringUTCMinus3(new Date());
    startTraerListado('contado', `${fecha}`, `${fecha}`);
    navigate('/listado');
  };

  const navegarAListadoPresupuesto = (e) => {
    const fecha = toISOStringUTCMinus3(new Date());
    startTraerListado('presupuesto', `${fecha}`, `${fecha}`);
    navigate('/listado');
  };

  return (
    <nav className='flex gap-10 items-center bg-black py-3 text-white px-5'>
      <div className='gap-2 flex items-center'>
        <RxLightningBolt size={20} className="text-yellow-400" />
        <span className='text-lg font-bold text-white'>
          Electro
          <span className='text-yellow-400'>Avenida</span>
        </span>
      </div>


      <div>
        <div className="flex justify-center items-center gap-2 cursor-pointer hover:bg-yellow-600 p-2 rounded-sm" onClick={() => setDesplegarListado(!desplegarListado)}>
          <p className="text-white font-medium">Listados</p>
          <MdOutlineKeyboardArrowDown size={20} className="text-white"/>
        </div>
        {desplegarListado && (
          <div className="bg-white absolute z-50 rounded-lg border border-gray-200">
            <div className="max-h-32 m-2 rounded-lg">
              <div onClick={navegarAListadoContado} id="contado" className="border px-2 rounded-sm flex gap-4 items-center hover:border hover:border-rounede-lg hover:cursor-pointer hover:border-black">
                <FiCreditCard size={15} className="text-black"/>
                <p className="text-black">Contado</p>
              </div>
              <div  className="border px-2 rounded-sm flex gap-4 items-center hover:border hover:border-rounede-lg hover:cursor-pointer hover:border-black">
                <HiOutlineDocumentChartBar size={15} className="text-black"/>
                <p className="text-black">Cuenta Corriente</p>
              </div>
              <div onClick={navegarAListadoPresupuesto} className="border px-2 rounded-sm flex gap-4 items-center hover:border hover:border-rounede-lg hover:cursor-pointer hover:border-black">
                <HiOutlineClipboardDocumentList size={15} className="text-black"/>
                <p className="text-black">Presupuesto</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
