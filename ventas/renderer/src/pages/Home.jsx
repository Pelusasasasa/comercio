
import { IoPeopleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
const cards = [
  { title: 'Clientes', route: '/clientes', icon: <IoPeopleOutline size={50} color='' className='bg-yellow-200 text-orange-400 rounded-full p-2'/> },
]

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.route)}
            className="cursor-pointer bg-white shadow-md p-8 rounded-lg flex items-center justify-center hover:bg-yellow-100 transition gap-2"
          >
            {card.icon}
            <span className="text-xl font-semibold text-yellow-600">{card.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home