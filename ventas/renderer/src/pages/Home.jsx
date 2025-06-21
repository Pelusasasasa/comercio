
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardMenu } from '../components/CardMenu'
import PasswordModal from '../components/PasswordModal'

import { IoPeopleOutline } from 'react-icons/io5';
import { BsBoxSeam } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { GrDocumentText } from "react-icons/gr";



const cards = [
  { title: 'Ventas', route: '/ventas', icon: <FiShoppingCart size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Clientes', route: '/clientes', icon: <IoPeopleOutline size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Productos', route: '/productos', icon: <BsBoxSeam size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Consultar', route: '/consultar', icon: <GrDocumentText size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
]

const Home = () => {
  const navigate = useNavigate();
  
  const [passwordModal, setPassWordModal] = useState(false);
  const [targetRoute, setTargetRoute] = useState('');

  const handleClick = (route) => {
    console.log(route);
    setTargetRoute(route);
    setPassWordModal(true);
  };

  const validatePassword = () => {
    console.log(targetRoute);
    navigate(targetRoute);
  }

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
        {cards.map((card) => (
          <CardMenu key={card.title} handleClick={handleClick} title={card.title} icon={card.icon} route={card.route} setPassWordModal={setPassWordModal}/>
        ))}
      </div>


      { passwordModal && <PasswordModal isOpen={passwordModal} onClose={setPassWordModal} onValidate={validatePassword}/>}
    </div>
  )
}

export default Home