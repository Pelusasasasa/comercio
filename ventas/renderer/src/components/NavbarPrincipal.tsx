
import { RxLightningBolt } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


interface Props {
    exportar?: () => void;
    text?: string;
}

export const NavbarPrincipal = ({exportar, text}: Props) => {


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
        <div className="flex justify-center items-center gap-2 cursor-pointer hover:bg-yellow-600 p-2 rounded-sm">
          <p className="text-white font-medium">Listados</p>
          <MdOutlineKeyboardArrowDown size={20} className="text-white"/>
        </div>
      </div>
    </nav>
  )
}
