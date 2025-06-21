
import { HeaderConsultar } from '../components/consultar/HeaderConsultar'
import { Navbar } from '../components/Navbar'

const Consultar = () => {
  return (
    <div>
        <Navbar text='Consultar Cuenta' />

        <div className='bg-yellow-50'>
          <HeaderConsultar/>
        </div>
    </div>
  )
}

export default Consultar