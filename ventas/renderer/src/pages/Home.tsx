
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


import { CardMenu } from '../components/CardMenu'
import PasswordModal from '../components/PasswordModal'
import { AsideBar } from '../components/AsideBar';

import { IoPeopleOutline } from 'react-icons/io5';
import { BsBoxSeam } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { GrDocumentText } from "react-icons/gr";
import { LuReceipt } from "react-icons/lu";
import { HiOutlineDocumentReport } from "react-icons/hi";


const cards = [
  { title: 'Ventas', route: '/venta', icon: <FiShoppingCart size={80}  className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Clientes', route: '/cliente', icon: <IoPeopleOutline size={80}  className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Productos', route: '/producto', icon: <BsBoxSeam size={80}  className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Consultar', route: '/consultar', icon: <HiOutlineDocumentReport size={80}  className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Recibo', route: '/recibo', icon: <LuReceipt size={80}  className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Remito', route: '/remito', icon: <GrDocumentText size={80}  className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
]

export const Home = () => {
  const navigate = useNavigate();
  
  const [passwordModal, setPassWordModal] = useState<Boolean>(false);
  const [targetRoute, setTargetRoute] = useState('');

  const handleClick = (route) => {
    setTargetRoute(route);
    setPassWordModal(true);
  };

  const validatePassword = async(permisos: object) => {
  
    if(permisos[targetRoute.slice(1)]){
      navigate(targetRoute);
    }else{
      await Swal.fire('No tiene permisos para ingresar a la seccion', '' ,'error')
    }
  }

  return (
    <div className="min-h-screen gap-5 bg-yellow-50  flex flex-1 overflow-hidden">
      <AsideBar/>

      <div className=" flex-1 overflow-auto p-4 ">
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {cards.map((card) => (
          <CardMenu key={card.title} handleClick={handleClick} title={card.title} icon={card.icon} route={card.route} setPassWordModal={setPassWordModal}/>
        ))}
        </div>
      </div>
      
      
      { passwordModal && <PasswordModal isOpen={passwordModal} onClose={setPassWordModal} onValidate={validatePassword}/>}
    </div>
  )
};