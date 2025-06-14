
import { IoPeopleOutline } from 'react-icons/io5'
import { BsBoxSeam } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { CardMenu } from '../components/CardMenu'
import { useState } from 'react'
import PasswordModal from '../components/PasswordModal'
const cards = [
  { title: 'Ventas', route: '/ventas', icon: <FiShoppingCart size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Clientes', route: '/clientes', icon: <IoPeopleOutline size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
  { title: 'Productos', route: '/productos', icon: <BsBoxSeam size={80} color='' className='bg-yellow-200 text-orange-400 rounded-full p-3'/> },
]

const Home = () => {

  const [passwordModal, setPassWordModal] = useState(true)

  const validarUsuario = (text) => {
    if(text === "210"){
      return true
    }else{
      return false
    }
  }

  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mx-auto">
        {cards.map((card) => (
          <CardMenu key={card.title} title={card.title} icon={card.icon} route={card.route} setPassWordModal={setPassWordModal}/>
        ))}
      </div>


      { passwordModal && <PasswordModal isOpen={passwordModal} onClose={setPassWordModal} onValidate={validarUsuario}/>}
    </div>
  )
}

export default Home